const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Testando o Elastic Beanstalk");
});

app.listen(3000, () => {
    console.log("teste");
});

