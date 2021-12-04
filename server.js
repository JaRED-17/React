const express = require('express');
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const env = process.env.NODE_ENV || 'development';
const config = require(env === 'development' ? './webpack.config.dev.js' : './webpack.config.prod.js');
const compiler = webpack(config);
const PORT = process.env.PORT || 3000;

const getFiles = (dir, files_) => {

    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (let i in files){
        let  name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(path.basename(path.parse(name).name));
        }
    }
    return files_;
};

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.get("/api/news/all", (req, res) => {
    res.send(getFiles(path.join(__dirname, '/src', '/media/news')))
});

app.listen(PORT, () => {
    console.log(`Server has been started on http://localhost:${PORT}`);
});