import express from 'express';

const app = express();

const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res)=> {
    res.send('HELLO HEROKU~!!')
})

app.listen(PORT, ()=> {
    console.log('server starting~!!')
})