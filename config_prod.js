const prodKeys = {
    db: {
        host: process.env.CLEARDB_DATABASE_URL,
        user: process.env.HOST,
        password: process.env.PASSWORD,
        database: process.env.database
    }
}

module.exports = prodKeys;