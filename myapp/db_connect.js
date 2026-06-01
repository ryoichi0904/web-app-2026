require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD
});
async function main(){
    const client = await pool.connect();
    console.log('DBに接続されました');
    client.release();
    await pool.end();
    console.log('接続を終了終了しました')
}
main();    
