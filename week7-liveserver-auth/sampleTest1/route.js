const express = require('express');
const pg = require('pg');

const { Pool } = pg;
const apiPort = 3000;
const app = express();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: "sampletest1",
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

app.use(express.json());

app.get('/api/people', async (req, res) => {
    try{
        const result = await pool.query(
            `SELECT * FROM people;`
        )
        res.status(201).send(result.rows)
    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }
});

app.get('/people', (req,res)=>{
    pool.query('SELECT * FROM people', (err, data) => {
        console.log('basic get',data.rows);
        res.send(data.rows)
    });
});

// GET "/people/:id"
app.get('/people/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const result = await pool.query(
            `SELECT * from people
            WHERE id=$1;`, [id]
        );
        res.status(201).send(result.rows)
    } catch(error) {
        console.log(error)
        res.json(error)
    }
});


app.listen(apiPort, () => {
    console.log(`server listening on http://localhost:${apiPort}`)
})