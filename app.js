const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.redirect('/');
})

app.get('template-nodejs-cto9-dev.fl0.io/:username', (req,res) =>{
    const username = req.params.username
    res.send(console.log(`${username} - Usuário`))
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})