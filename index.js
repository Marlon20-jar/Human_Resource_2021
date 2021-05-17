const express = require('express');
const app = express();
const { empleados } = require('./HR.json');

app.get("/", (req, res, next)=> {
    res.status(200);
    res.send("Bievenido al API REST de Recursos Humanos");
});

app.get('/empleados', (req, res, next) => {
    res.status(200);
    res.send(empleados);
});

app.get('/empleados/:id', (req, res, next) =>{
    res.status(200);
    res.send(empleados[req.params.id - 1]);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});