// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/api/timestamp",function(req,res){
  var date =new Date();
  console.log(date.toUTCString());
  res.json({"unix":date.getTime(),"utc":date.toUTCString()});
});
app.get("/api/timestamp/:datestr",function(req,res){
  var input =req.params.datestr;
  var regex =/\d{5,}/;
  if(regex.test(input)){
    input=parseInt(input);
  
  }
  console.log("input" + input);
    var ans = new Date(input);
 console.log(ans);
  if(!isNaN(ans.getTime()))
  {
    res.json({"unix":ans.getTime(),"utc":ans.toUTCString()});
    //console.log(ans.getTime());
  }else{
    res.json({"error" : "Invalid Date"});
    //console.log(ans.getTime());
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
