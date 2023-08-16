const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true,
}),
)
app.use(express.json())

app.get('/login', (req, res) => {

    res.sendFile('public/index.html');
})

app.post('/views/index', (req,res) =>{
    console.log(req.body)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})