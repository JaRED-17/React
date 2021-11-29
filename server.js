const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const env = process.env.NODE_ENV || 'development';
const config = require(env === 'development' ? './webpack.config.dev.js' : './webpack.config.prod.js');
const compiler = webpack(config);
const PORT = process.env.PORT || 3000;

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.listen(PORT, function () {
    console.log(`Server has been started on http://localhost:${PORT}`);
});