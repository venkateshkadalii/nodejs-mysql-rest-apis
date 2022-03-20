const express = require('express')
const router = express.Router();
const mysqlConnection = require('../connection.js')

// GET
router.get('/cities', (req, res) => {
    mysqlConnection.query("SELECT * FROM city", (err, rows, fields) => {
        if(!err) {
            res.send({
                "is_successful" : true,
                "message" : 'success',
                "peoples" : rows
            })
        } else {
            res.send({
                "is_successful" : false,
                "message" : "error while getting cities"
            })
        }
    })
})

// DELETE
router.delete('/delete-city', async function(req, res) {
    mysqlConnection.query("DELETE FROM city WHERE id=?", [req.body.id], (err, rows, fileds) => {
        if(err) {
            res.send({
                "is_successful" : false,
                "message" : "error while deletion"
            })
        } else {
            res.send({
                "is_successful" : true,
                "message" : "city deleted successfully"
            })
        }
    })
})

// POST
router.post('/insert-city', async function (req, res) {
    mysqlConnection.query('INSERT INTO CITY (ID, Name, CountryCode, District, Population) VALUES (?, ?, ?, ?, ?)', [req.body.id, req.body.name, req.body.country_code, req.body.district, req.body.population], (err, rows, fields) => {
        if(err) {
            console.log(err)
            res.send({
                "is_successful" : false,
                "message" : "city insertion failed"
            })
        } else {
            res.send({
                "is_successful" : true,
                "message" : "city inserted successfully"
            })
        }
    })
})

// PUT
router.put('/update-city', async function(req, res) {
    mysqlConnection.query("UPDATE city set name=? WHERE id=?", [req.body.name, req.body.id], (err, rows, fields) => {
        if(!err) {
            res.send({
                "is_successful" : true,
                "message": "city updated successfully"
            })
        } else {
            res.send({
                "is_successful" : true,
                "message" : "city updation failed"
            })
        }
    })
})

router.post('/city-by-id', async function(req, res) {
    mysqlConnection.query("SELECT * FROM city where id=?", [req.body.id], (err, rows, fileds) => {
        if(!err){
            res.send({
                "is_successful": true,
                "message": "city get success",
                "city" : rows[0].Name,
                "country_code": rows[0].CountryCode,
                "district" : rows[0].District,
                "population": rows[0].Population
            })
        } else {
            res.send({
                "is_successful" : false,
                "message": "city get failed"
            })
        }
    })
})


module.exports = router