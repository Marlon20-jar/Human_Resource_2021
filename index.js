const bodyParser = require( 'body-parser' );
const express = require('express');
const app = express();
const { empleados } = require('./HR.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next)=> {
    return res.status(200).send("Bievenido al API REST de Recursos Humanos");
});

app.post("/empleados", (req, res, next) => {
    return res.status(200).send(req.body);
})

app.get('/empleados', (req, res, next) => {
    return res.status(200).send(empleados);
});

app.get('/empleados/:id([0-9]{1,3})', (req, res, next) =>{
    const id = req.params.id -1;
    if (id >= 0 && id <= 9) { 
        return res.status(200).send(empleados[req.params.id - 1]);
    }
    return res.status(404).send("Empleado no encontrado");
});

app.get('/empleados/:name([A-Za-z]+)', (req, res, next) =>{
    const name = req.params.name;

    const emp = empleados.filter((e) => {
        return (e.name.toUpperCase() == name.toUpperCase()) && e;
    }); 

    if (emp.length > 0 ) {   
        return res.status(200).send(emp) ;
    } 
    return res.status(404).send("Empleado no encontrado");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});