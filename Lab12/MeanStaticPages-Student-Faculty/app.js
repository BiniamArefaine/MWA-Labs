var express = require("express");
var path = require("path")
var routes = require("./api/routes");

const app = express();

app.set("port", 8080);
app.use(function(req,res,next){
    console.log(req.method, req.url);
    next();
})

app.use("/", routes);
app.use(express.static(path.join(__dirname, "/public")));
// app.use(("/node_modules", express.static(path.join(__dirname, "node_modules"))));


var server = app.listen(app.get("port"), function(){
    var port  = server.address().port;
    console.log("Listening to port " , port);
})

