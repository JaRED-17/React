const express = require('express');
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/news/allnews", (req, res) => {
    const allNews = getFiles(path.join(__dirname, '/src', '/media/news'));
    let result = [];

    allNews.map(news => {
        result.push({
            html: fs.readFileSync(path.join(__dirname, '/src', `/media/news/${news}.html`), 'utf-8'),
            date: news
        })
    });

    res.send(result);
});

app.post("/api/news/onenews", (req, res) => {
    if (!req.body) return {}

    res.send({
        html: fs.readFileSync(path.join(__dirname, '/src', `/media/news/${req.body.date}.html`), 'utf-8'),
        date: req.body.date
    });
});

app.listen(PORT, () => {
    console.log(`Server has been started on http://localhost:${PORT}`);
});