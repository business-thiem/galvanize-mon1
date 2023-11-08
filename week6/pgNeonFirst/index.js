import express from 'express'
import pg from 'pg'
const {Pool} = pg;

const LOCAL_PORT = 3000;

const app = express()
app.use(express.json())

// see: https://neon.tech/docs/guides/node for how to connect
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        require: true
    }
})

app.get('/users', async (req,res) => {
    const client = await pool.connect();
    try{ 
        let result = await client.query(
            'SELECT * FROM users'
        );
        res.send(result.rows)
    } finally {
        client.release(); //release connection
    }
})


app.listen(LOCAL_PORT, (req, res) => {
    console.log(`server listening on http://localhost:${LOCAL_PORT}`)
})
