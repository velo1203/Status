// database/db.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db"); // 데이터베이스 파일 생성 및 연결

db.serialize(() => {
    // 사용자 테이블 생성
    db.run(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE,username TEXT, password TEXT)"
    );
});

export default db;
