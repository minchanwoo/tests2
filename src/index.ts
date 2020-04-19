import express from 'express';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res)=> {
    res.send('HELLO HEROKU~!!')
})

app.listen(4000, ()=> {
    console.log('server starting~!!')
})