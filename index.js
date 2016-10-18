let express = require("express")
let bodyParser= require('body-parser')
let monsters= require('./server-assets/models/monsters')
let server = express()


server.use(express.static(__dirname + "/public"))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use(monsters.routes)


server.listen(8080, function(){
  console.log("The server is running on port 8080")
})