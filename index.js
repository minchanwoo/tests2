const express = require('express');

var { sequelize } = require('./models');

const app = express();

sequelize.sync();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res)=> {
    res.send('HELLO HEROKU~!!')
})

app.listen(port, ()=> {
    console.log('server starting~!!')
})