const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

const path = require("path")

app.use(
    express.urlencoded({
        extended: true,
    }),
    )
app.use(express.json())  

const basePath = path.join(__dirname,"public")



app.post('/public/principal' ,(req,res)=>{
    const usuario = req.body.username
    if (usuario=="Jorge"){
        res.sendFile(`${basePath}/principal.html`)
    }else{
        res.send("Usuário incorreto!")
    }
})

app.get('/' ,(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})