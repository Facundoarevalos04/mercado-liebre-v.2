const express= require('express');
const app= express();
const path= require('path');
const port= 5000;

app.use(express.static('public'))

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/register', (req, res)=> res.sendFile(path.join(__dirname, 'views', 'register.html')))
app.get('/ingresa', (req, res)=> res.sendFile(path.join(__dirname, 'views', 'login.html')))





app.listen(5000, () => console.log("Servidor corriendo en http://localhost:" + port))