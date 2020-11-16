const express = require('express');
const router = express.Router();
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

router.get('/list', async function(req, res) {
    let size = req.query.s;
    const { rows } = await client.query(`SELECT * FROM rating WHERE size='${size}'`);
    res.status(200).json(rows);
});

router.post('/new', async function(req, res) {
    const sql = `INSERT INTO rating(name, size, time, steps, date) VALUES ($1, $2, $3, $4, $5)`;    
    const date = new Date();
    const values = [
        req.body.name,
        req.body.size,
        Number(req.body.time),
        Number(req.body.steps),
        date
    ];

    try {
        await client.query(sql, values);        
        res.status(200).json({"msg":"Added to table"});
    } catch (e) {
        console.error(e);
        res.status(404).json({"msg":"Error with rating table"});
    }
});

module.exports = router; 
