const Koa = require('koa');
const helmet = require('koa-helmet');

const app = new Koa();

// Use helmet to add security headers
app.use(helmet({
    contentSecurityPolicy: false // Disable CSP if not needed
}));

module.exports = app;
