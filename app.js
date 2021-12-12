const express = require('express');
const colors = require('colors')
const app = express();

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');



app.get('/', function (req, res) {
    res.render('index')
})



app.listen(3000, function () {
    console.log('[✅] Server running on port 3000'.green);
})