var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.db');
var SECRET_KEY = "asefmklamnwepjtpo23mop5m2p3om5p213m5op23mom23mop3m5om23pomqw3opm5op32m5op2m3porm23opmpo5m2po3m5ro2p3mrp2m3rpo5m2p5m2p"
/* GET home page. */

router.get("/", function (req, res, next) {
  const query = `select * from board where type_code=1 `;
  db.serialize(function () {
    db.all(query, function (err, rows) {
      if (err) res.status(500).send("db")
      else {
        console.log(rows[0])
        res.render("index", { rows, rowsInt: parseInt(rows.length / 5), rest: rows.length % 5 })
      }
    })
  })
})

router.get("/admin", function (req, res, next) {
  res.render("admin")
})
router.post("/admin",function (req, res, next){
  if(req.body.pw !== SECRET_KEY) res.send("Error")
  else{
    var title = req.body.title;
    var content= req.body.content;
    var imgURL=req.body.img;
    var type_code=req.body.type_code;
    var q= `insert into board(title,content,img,type_code) values("${title}","${content}","${imgURL}",${type_code});`
    db.run(q,function(err){
      if (err) res.status(400).send("db Err")
      else res.send("good")
    })

   
  }
})
module.exports = router;
