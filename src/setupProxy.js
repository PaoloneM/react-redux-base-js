const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://testinterview.smartlis.com',
      changeOrigin: true,
    })
  );
};

module.exports = function(app) {
    app.use(
      '/accounts',
      createProxyMiddleware({
        target: 'https://testinterview.smartlis.com',
        changeOrigin: true,
      })
    );
  };