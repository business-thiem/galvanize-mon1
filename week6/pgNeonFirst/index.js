import express from 'express'
import pg from 'pg'
const {Pool} = pg;


// see: https://neon.tech/docs/guides/node
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        require: true
    }
})

const PORT = 3000
const app = express()
app.use(express.json())


// hello world connection function
async function getPostgresVersion() {
    const client = await pool.connect();
    try {
      const response = await client.query('SELECT version()');
      console.log(response.rows[0]);
    } finally {
      client.release();
    }
  }
  
  getPostgresVersion();



// pool.connect((error, client, release) => {
//     if(error){
//         return console.error('Error acquiring client', error.stack)
//     }
//     console.log('Connected to the Database')
// })


// app.get('/users', async (req,res) => {
//     let result = await pool.query(
//         'SELECT * FROM users'
//     );
//     res.send(result.rows)
// })


// app.listen(PORT, (req, res) => {
//     console.log(`server listening on http://localhost:${PORT}`)
// })
