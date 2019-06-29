'use strict';

const dotenv = require('dotenv').config();
const Koa = require('koa');
const favicon = require('koa-favicon');
const serve = require('koa-static');
const cors = require('@koa/cors');
const render = require('koa-ejs');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const http = require('http');
// const https = require('https');
// const http2 = require('http2');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
var debug = require('debug')('demo:server');

const app = new Koa();
const router = require('./routes');

const HTTP_PORT = normalizePort(process.env.PORT || 80);
// const HTTPS_PORT = process.env.PORT || 443;

// const options = {
//   key: fs.readFileSync(path.join(__dirname, 'resources/ssl/key.pem')),
//   cert: fs.readFileSync(path.join(__dirname, 'resources/ssl/cert.pem')),
// };

const httpServer = http.createServer(app.callback());
// const httpsServer = https.createServer(options, app.callback());
// const http2Server = http2.createSecureServer(options, app.callback());

// error handler
onerror(app);

// middleware
app.use(
  bodyParser({
    enableTypes: ['json', 'form', 'text'],
  })
);

// config MimeType json
app.use(json());

// compress for all the text content
app.use(
  compress({
    filter: function(content_type) {
      return /text/i.test(content_type);
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH,
  })
);

// for dotenv
if (dotenv.error) throw dotenv.error;
console.log(`key added in env by dotenv are:\n`, dotenv.parsed);

// enable cors
app.use(cors());

// serve favicon
app.use(favicon(__dirname + '/public/favicon.ico'));

// serve static contents
app.use(serve(path.join(__dirname, 'public')));

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// config header and x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  ctx.state = ctx.state || {};
  ctx.state.now = new Date();
  ctx.state.ip = ctx.ip;
  ctx.state.version = '2.0.0';
  const ms = Date.now() - start;
  ctx.set({
    'Last-Modified': new Date(),
    Server: 'ONSI',
    'Cache-Control': 'public, max-age=60000',
    // 'Cache-Control': 'max-age=31557600',
    'X-Powered-By': 'Koa',
    'X-Response-Time': `${ms}ms`,
    Etag: crypto
      .createHash('md5')
      .update(JSON.stringify(ctx.body))
      .digest('hex'),
  });
});

// global config for domain
app.use(async (ctx, next) => {
  // get tagline
  let tagLine = process.env.TAG_LINE;
  // get host
  let host = ctx.request.host;
  // set domain
  let domain = host === 'localhost' ? `http://${host}` : `https://${host}`;
  // assign as a server details
  ctx.app.context.serverDetails = { domain, tagLine };

  await next();
});

// view engine with ejs rendering
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layouts/public/layout.min',
  viewExt: 'html',
  delimiter: '%',
  cache: false,
  debug: false,
  async: true,
});

// routes
app.use(router.routes()).use(router.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

// listen to http server using koa api
// app.listen(HTTP_PORT, (err) => {
//   if (err) throw err;
//   console.log(`HTTP server is listening on PORT ${HTTP_PORT}`);
// });

// listen to http server using node js core api
httpServer.listen(HTTP_PORT, (err) => {
  if (err) throw err;
  console.log(`HTTP server is listening on PORT ${HTTP_PORT}`);
});

httpServer.on('error', onError); // handle http-server error
httpServer.on('listening', onListening); // handle http-server listen events

// listen to https or https server using node js core api
// httpsServer.listen(HTTPS_PORT, (err) => {
//   if (err) throw err;
//   console.log(`HTTPS server is listening on PORT ${HTTPS_PORT}`);
// });

// listen to https or http2 server using node js core api
// http2Server.listen(HTTPS_PORT, err => {
//     if (err) throw err;
//     console.log(`HTTP2 server is listening on PORT ${HTTPS_PORT}`);
// });

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind =
    typeof HTTP_PORT === 'string' ? 'Pipe ' + HTTP_PORT : 'Port ' + HTTP_PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = httpServer.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log(`server is listening on ${HTTP_PORT}.`);
}
