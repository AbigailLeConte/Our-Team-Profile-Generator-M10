const express =require('express');
const { default: inquirer } = require('inquirer');
const inquirer = require(inquirer);
const jest = require(jest);
const port = process.env.PORT || 5501;
const nodejs = {
    pkgName: 'Node.js',
    type: 'JavaScript runtime environment',
};

const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static('public'));


app.get('/form', (req, res)=>{

    res.sendFile(__dirname + '/public/index.html');
});

app.post('/index.js',(req, res)=>{
    console.log(req.body);
});

app.listen(port, ()=>{
    console.log('Server started at http://localhost:${port}')
});