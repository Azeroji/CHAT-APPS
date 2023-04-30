import mysql from 'mysql2'
import bcrypt from 'bcryptjs'


function encrypt(key){
    return key * 3569 + 7558
}

function decrypt(key){
    return (key - 7558)/3569
}


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'dalildalil33',
  database: 'chat'
}).promise()

export async function users(id) {
    try {
        const [result] = await pool.query(`SELECT id, username FROM users WHERE id != ? `,[decrypt(id)])
        return { success : true , result : result }
    } catch(error) {
        console.log(error)
    }
}

export async function getmsg(id) {
    try {
        const [result] = await pool.query(`SELECT * FROM messages
        WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? and receiver_id = ?)
        ORDER BY id ASC;`,[ decrypt(id.id1), id.id2,id.id2, decrypt(id.id1) ])
        return { success : true , result : result }
    } catch(error) {
        console.log(error)
    }
}

export async function sendmsg(msg) {
    try {
        const [result] = await pool.query(`INSERT INTO messages (sender_id, receiver_id, content) VALUES(?, ?, ?) `,[ decrypt(msg.sender_id), msg.receiver_id, msg.content])
        return { success : true }
    } catch(error) {
        console.log(error)
    }
}

export async function logIn(log) {
    try {
        const [result] = await pool.query(`SELECT * FROM users WHERE username = ?`,[log.id])
        if (result.length >= 1 && bcrypt.compare(log.password, result[0].password)) {
            return { success : true, id: encrypt(result[0].id)}
        }
        return { success : false }

    } catch(error) {
        console.log(error)
    }
}

export async function register(reg) {
    try {
        const [result] = await pool.query(`SELECT * FROM users WHERE username = ?`,[reg.username])
        if (result.length < 1) {
            const password = await bcrypt.hash(reg.password, await bcrypt.genSalt(10))
            const [newResult] = await pool.query(`INSERT INTO users (username, password) VALUES(?, ?) `,[ reg.username, password])
            return { success : true, id : encrypt(newResult.insertId) }
        }
        return { success : false }
    } catch(error) {
        console.log(error)
    }
}

export async function auth(authkey) {
    try {
        const [result] = await pool.query(`SELECT * FROM users WHERE id = ?`,[decrypt(authkey)])
        if (result.length < 1) {
            return { success : false }
        }
        const value = { success : true, result : {
            username : result[0].username,
        } }
        return value
    } catch(error) {
        console.log(error)
    }
}