const express = require('express');

var { sequelize } = require('./models');

const app = express();

sequelize.sync();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', async(req, res)=> {
    res.send('안녕하세요 헤로쿠에 테스트중입니다')
})

app.listen(port, ()=> {
    console.log('server starting~!!')
})