var express = require('express');
var router = express.Router();
var sqlite3= require('sqlite3').verbose();
var db= new sqlite3.Database('data.db');

/* GET home page. */

router.get("/", function (req, res, next) {
  const query = `select * from board `;
  db.serialize(function () {
    db.all("query", function (err, rows) {
      if (err) res.status(500).send("db")
      else {console.log(rows[0])
        res.render("all", { datas: rows })}
    })
  })
})

module.exports = router;
