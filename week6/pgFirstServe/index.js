import express from 'express'
import pg from 'pg'
const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: "userexample2",
    password: process.env.DB_PASSWORD,
    port: process.env.PORT,
    apikey: process.env.API_KEY || ''
})

const PORT = 3000
const app = express()
app.use(express.json())


app.get('/users', async (req,res) => {
    let result = await pool.query(
        'SELECT * FROM users'
    );
    res.send(result.rows)
})

app.get('users/:id', async (req, res, next) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        return res.status(400).send('INAVLID ID')
    } else{
        let result = await pool.query('SELECT * FROM users WHERE id=$1', [id])
        if(result.rows.length === 0){
            res.status(400).send('NOT FOUND')
        }
        res.status(200).send(result.rows[0])
    }

})

app.post('/users', async (req,res) => {
    const {name, email, age} = req.body
    let result = await pool.query(
        `INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *`, [name, email, age]
    )
    res.send(result.rows[0])
})

app.put('/users/:id', async(req,res) => {
    const id = Number(req.params.id)
    let { name, email, age} = req.body;
    let result = await pool.query(
        `UPDATE users
        SET name = $1, email = $2, age = $3
        WHERE = id=$4 
        RETURNING*
        `,
        [name, email, age, id]
    )
    res.send(result)
})


app.delete('/users/:id', async (req,res) => {
    const id = Number(req.params.id)
    let result = await pool.query('DELETE from users WHERE id=$1', [id])
})

app.use( (err, req, res, next) => {
    res.status(err.status).json({ error: err })
})


app.listen(PORT, (req, res) => {
    console.log(`server listening on http://localhost:${PORT}`)
})


