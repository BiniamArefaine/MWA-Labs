const mongoose = require("mongoose");
const Student = mongoose.model("Student");

module.exports.addressesGetAll = function(req, res){
    var studentId = req.params.studentId;
    if(Student.findById(studentId) == null){
        res.status = 404,
        res.status(404).json({"message" : "Student Id not found"});
    }
    Student.findById(studentId).select("address").exec(function(err, addresses){

        var address = addresses.address;
        console.log(address)
        const response = {
            status :200,
            message : address
        }
        if(err){
            response.status = 400,
            response.message = err
            console.log(err)
        }else{
            response.status = 404,
            response.message = err
            console.log(err)
        }
        
        res.status(response.status).json(response.message);
    })
}

module.exports.addressGetOne = function(req, res){

    var studentId = req.params.studentId;
    var addressId = req.params.addressId;

    Student.findById(studentId).select("address").exec(function(err, addresses){
     
        var addr = addresses.address.id(addressId);
        console.log(addresses.address.id(addressId))
        const response = {
            status : 200,
            message : addr
        };

        if(err){
            response.status = 500,
            response.message ={"message" : "Data base error"}
        }else if(!addresses){
            response.status = 404,
            response.message ={"message" : "Address ID not found"}
        }
        res.status(response.status).json(response.message);
    })


}