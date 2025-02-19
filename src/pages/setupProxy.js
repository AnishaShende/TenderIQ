const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/ask',
        createProxyMiddleware({
            target: 'https://thirty-paths-relax.loca.lt/ask',
            changeOrigin: true,
        })
    );
};
