const express = require('express');

var { sequelize, User } = require('./models');

const app = express();

sequelize.sync();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', async(req, res)=> {
    res.send('HELLO HEROKU~!!')
    const result = await User.findAll();
    console.log({result})
})

app.listen(port, ()=> {
    console.log('server starting~!!')
})