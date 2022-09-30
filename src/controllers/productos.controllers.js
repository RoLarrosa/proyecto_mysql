const ctrlUser = {};
const conexion = require("../db/connection");

ctrlUser.getUser = async (req, res) => {
    const { id } = await req.params;

    let sql = `SELECT * FROM productos`;

    await conexion.query(sql, (err, rows) => {
    if (err) throw err;
        else {
        res.json(rows);
        }
    });
}

ctrlUser.getUserDni = async (req, res) => {
    const { dni } = await req.params;
    let sql2 = `SELECT * FROM usuarios WHERE dni = ${dni}`;
    await conexion.query(sql2, (err, rows) => {
        if (err) throw err;
            else {
            res.json(rows);
            }
        });
}

ctrlUser.postUser = async (req, res) => {
    const { id, nombre, apellido, edad, nacionalidad, dni} = await req.body;
    if (nombre == "" || !nombre) {
        res.json({ status: "datos incompletos" });
    } else {
        let sql = `insert into usuarios(id,
        nombre,
        apellido,
        edad,
        nacionalidad,
        dni) 
        values('${id}'
        ,'${nombre}'
        ,'${apellido}'
        ,'${edad}'
        ,'${nacionalidad}'
        ,'${dni})`;

        conexion.query(sql, (err, rows) => {
        if (err) {
            res.json(err);
        } else {
            res.json({ status: "Usuario agregado correctamente" });
        }
        });
    }
};