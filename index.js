const express = require('express');
const app = express();
const { empleados } = require('./HR.json');

app.get("/", (req, res, next)=> {
    return res.status(200).send("Bievenido al API REST de Recursos Humanos");
});

app.get('/empleados', (req, res, next) => {
    return res.status(200).send(empleados);
});

app.get('/empleados/:id([0-9]{1,3})', (req, res, next) =>{
    const id = req.params.id -1;
    (id >= 0 && id <= 9) ?
        res.status(200).send(empleados[req.params.id - 1]):
        res.status(404).send("Empleado no encontrado");
});

app.get('/empleados/:name([A-Za-z]+)', (req, res, next) =>{
    const name = req.params.name;

    const emp = empleados.filter((e) => {
        return (e.name.toUpperCase() == name.toUpperCase()) ? e : null;
    }); 
    
    (emp.length > 0 ) ?  
    res.status(200).send(emp) : 
    res.status(404).send("Empleado no encontrado");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});