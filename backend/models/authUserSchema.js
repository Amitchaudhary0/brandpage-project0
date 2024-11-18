import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()

const pool = mysql.createPool(
    {
        // host: process.env.MYSQL_HOST,
        // user: process.env.MYSQL_USER,
        // password: process.env.MYSQL_PASSWORD,
        // database: process.env.MYSQL_DATABASE
        host: "localhost",
        user: "root",
        password: "263642",
        database: "authuser"
    }
).promise();

export async function getData() {
    const get_D = await pool.query("select * from login_user");
    // console.log(get_D[0]);
    return get_D[0];
}

export async function insertData(username, email, password,phoneno) {
    const insert_D = await pool.query(`INSERT INTO login_user (username, email, password,phoneno)
        VALUES(?,?,?,?)
        `,[username, email, password,phoneno]);
        const data = getData();
    return data ; 
}

export async function deleteAllData() {
    const deleteAll = await pool.query(`DELETE FROM login_user`);
    return deleteAll;
}

export async function deleteData(email) {
    const deleteByEmail = await pool.query(`DELETE FROM login_user where email = ?`,[email]);
    return deleteByEmail;
}

// const result = await insertData("Aman", "amanc@dewsolutions.in", "aman@123");
// deleteData( "amanc@dewsolutions.in");
// getData();
// deleteData();

// console.log(result);