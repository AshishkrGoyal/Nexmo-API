const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));

app.set('views',__dirname+'/../views');
app.set('view engine','html');
app.engine('html', ejs.renderFile);



const port = 1010;

app.get('/',function (req, res) {
    res.render('index');
});


app.listen(port,function () {
    console.log("server has been started at port"+port);
});