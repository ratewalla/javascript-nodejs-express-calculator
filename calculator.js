const express = require('express');
const bodyParse = require('body-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/index.html'); // sends user to index.html. __dirname = root directory
});

app.post('/', (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;

    res.send('The result is '+result);
});

app.get('/bmi', (req, res) => {
    res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/bmi', (req, res) => {
    let height = parseFloat(req.body.bmiNum1);
    let weight = parseFloat(req.body.bmiNum2);

    let result = weight/(height**2);
    res.send('Your bmi is '+result.toFixed(2));
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});