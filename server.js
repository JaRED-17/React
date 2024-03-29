const express = require('express')
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const env = process.env.NODE_ENV || 'development'
const config = require(env === 'development' ? './webpack.config.dev.js' : './webpack.config.prod.js')
const compiler = webpack(config)
const PORT = process.env.PORT || 3000

const getFiles = (dir, files_) => {
    files_ = files_ || []
    let files = fs.readdirSync(dir)

    for (let i in files) {
        let name = dir + '/' + files[i]

        if (fs.statSync(name).isDirectory()) {
            files_.push(name.match('[0-9]{2}.[0-9]{2}.[0-9]{4}')[0])
        }
    }
    return files_
}

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('dist'))

app.get('/api/news/allnews', (req, res) => {
    const allNews = getFiles(path.join(__dirname, '/src', '/media/news'))

    res.send(allNews.map(news => ({
        html: fs.readFileSync(path.join(__dirname, '/src', `/media/news/${news}/Short.html`), 'utf-8'),
        date: news
    })))
})

app.post('/api/news/newsbydate', (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(500).send('Something went wrong!')
    }

    res.send({
        html: fs.readFileSync(path.join(__dirname, '/src', `/media/news/${req.body.date}/Full.html`), 'utf-8'),
        date: req.body.date
    })
})

app.post('/api/news/lastnnews', (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(500).send('Something went wrong!')
    }
    const allNews = getFiles(path.join(__dirname, '/src', '/media/news'))
    const count = req.body.count

    res.send(allNews.map(news => ({
        html: fs.readFileSync(path.join(__dirname, '/src', `/media/news/${news}/Short.html`), 'utf-8'),
        date: news
    })).slice(0, count))
})

app.post('/api/user/login', (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(500).send('Something went wrong!')
    }

    if (req.body.email === 'igor.borozdov@gmail.com' && req.body.password === 'aA123456') {
        res.send({success: true})
    } else {
        res.send({success: false})
    }
})

app.post('/api/user/registration', (req, res) => {
    res.send({success: true})
})

app.post('/api/user/data', (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(500).send('Something went wrong!')
    }
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '/src', '/data/users.json'), 'utf-8'))

    res.send(data[req.body.user].data || {})
})

app.post('/api/user/save', (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(500).send('Something went wrong!')
    }

    res.send({success: true})
})

app.post('/api/comments', (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(500).send('Something went wrong!')
    }
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '/src', '/data/comments.json'), 'utf-8'))

    res.send(data ? data[req.body.date] ? data[req.body.date]['id' + req.body.id] : {} : {})
})

app.post('/api/settings', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '/src', '/data/settings.json'), 'utf-8'))

    res.send(data || {})
})

app.post('/api/settings/fields', (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(500).send('Something went wrong!')
    }
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '/src', '/data/settings.json'), 'utf-8'))

    res.send(data ? data['forms'][req.body.form]['fields'] : {})
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server has been started on http://localhost:${PORT}`)
})