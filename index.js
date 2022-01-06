/*
      username:"karu_1996",

    host:"free-tier6.gcp-asia-southeast1.cockroachlabs.cloud",
    
    port:"26257",

    PASSWORD: "Root@1234567",
    
    database:"candid-hare-2150.bank"
    cockroach sql --url "postgresql://karu_1996:Root@1234567@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert=$env:appdata\.postgresql\root.crt&options=--cluster%3Dcandid-hare-2150"
*/

const express = require("express");

const fs = require('fs');
const app = express();
const cors = require("cors");
const port=4000;
const host="127.0.0.1";
var bodyParser=require("body-parser");
app.use(bodyParser.json());
const Sequelize = require('sequelize');
const res = require("express/lib/response");
//const sequelize = new Sequelize('sqlite::memory:');
//const Sequelize=require("sequelize-cockroachdb");
var sequelize = new Sequelize({
    dialect: "postgres",
    username: "samiksha",
  password: "123456123456",
  host: "free-tier6.gcp-asia-southeast1.cockroachlabs.cloud",
  port: 26257,
  database: "ideal-koala-2152.social_flimytadka_database",
  dialectOptions: {
    ssl: {
      
      //For secure connection:
      ca: fs.readFileSync('./cer/root.crt')
              .toString()
    },
  },
  logging:false,
});

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
  app.use(cors(corsOptions));

  module.exports=app.listen(port, host,() => {
    console.log(`Server is running at ${host} port ${port}.`);
  });


 
//Get all movies
/*
app.get('/movies', (req, res) => {
    sequelize.query('SELECT * FROM social_filmytadka_database', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});
*/
app.get('/movies', (req, res) => {
sequelize.query('SELECT * FROM  social_flimytadka_Table', { type: sequelize.QueryTypes.SELECT}).then(function(users) 
{
    // We don't need spread here, since only the results will be returned for select queries

    res.send(users);
  })
});