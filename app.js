const express = require('express');
const app = express();

app.listen(4500, function () {
    console.log('listening on 4500')
})
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})