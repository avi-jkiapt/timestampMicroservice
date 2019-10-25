// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

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
  var ans;
    ans = new Date(input);
 
  if(!isNaN(ans.getTime()))
  {
    res.json({"unix":ans.getTime(),"utc":ans.toUTCString()});
  }else{
    res.json({"error" : "Invalid Date"});
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
