const { off } = require("process");
const dbConnection = require("../data/dbconnection");

module.exports.getCertainGames = function(req, res){
    var offset = 4;
    var count = 3;

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    };

    if(req.query && req.query.count){
        count = parseInt(req.query.count, 10);
        if(count > 7){
            count = 7;
        }
    };


    var db = dbConnection.get();
    var collection = db.collection("games");

    collection.find().skip(offset).limit(count).toArray(function(err, docs) {
        console.log("Found games", docs);
        res.status(200).json(docs);
        });




    
}