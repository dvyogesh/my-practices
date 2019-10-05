const express = require('express');
const os = require('os');
const fetch = require('cross-fetch');
const app = express();

app.use(express.static('dist'));

app.get('/api/getUseres', (req, res) =>{
	fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then((result)=> res.send(result)) 
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
