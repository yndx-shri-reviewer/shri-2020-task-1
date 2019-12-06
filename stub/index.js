const express = require('express');
const {bemhtml} = require('bem-xjst');
const path = require('path');
const fs = require('fs');

const app = express();

const templates = bemhtml.compile();

app.use('/static', express.static(`${__dirname}/build`));

app.get('/index|product', (req, res) => {
    const page = req.path.replace('/', '');

    const jsonPath = path.resolve(__dirname, 'pages', `${page}.json`);
    const bemjson = JSON.parse(fs.readFileSync(jsonPath, {encoding: 'utf-8'}));

    const contentHTML = templates.apply(bemjson);

    const pageHTML = `
    <!doctype html>
    <html>
        <head>
            <link rel="stylesheet" href="/static/style.css">
        </head>
        <body>
            ${contentHTML}
            <script type="text/javascript" src="/static/script.js"></script>
        </body>
    </html>`

    res.send(pageHTML);
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
})