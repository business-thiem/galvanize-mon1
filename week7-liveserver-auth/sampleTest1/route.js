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


app.get('/api/person', async (req, res) => {
    try{
        const result = await pool.query(
            `SELECT * FROM person;`
        )
        res.send(result.rows)
    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }
});


app.listen(apiPort, () => {
    console.log(`server listening on http://localhost:${apiPort}`)
})