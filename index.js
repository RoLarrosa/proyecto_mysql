require('./src/db/connection')
const express = require('express');
const morgan = require("morgan")
const app = express();

app.use(express.json());
app.use(morgan())


//app.use(require("./src/routes/productos.routes"))
app.use(require("./src/routes/user.routes"))

const port = 3000
app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`)
})