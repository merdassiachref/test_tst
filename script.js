var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");

var app = express();

const port = 1337;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "08994775",
  database: "test",
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected");
  }
});
app.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM  test.productivite",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Succesfull getting data \n");
        res.json(rows);
      }
    }
  );
});

/*app.post("/add", (req, res) => {
  const { n_val, val } = req.body;
  let myQuery = `INSERT INTO test.productivite(n_val,val) VALUES ('${n_val}','${val}')`;
  connection.query(myQuery, (error, res) => {
    if ((error, res)) {
      console.log(error);
    } else {
      console.log("Succesfully added!!");
      res.json(res);
    }
  });
});*/

app.put("/:nVal", (req, res) => {
  let val = req.body.val;
  db.query(
    `UPDATE test.productivite SET val=${val} where n_val=${nVal} `,
    function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log("Succefully update " +{nVal});
      }
    }
  );
});

app.listen(port, () => {
  console.log("Server running on port " + { port });
});
