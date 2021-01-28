const { isValidObjectId } = require("mongoose")
var path = require("path")

const dispatchPage = function(pageName, res){
    console.log("Request students index page")
    const response = {
        status: 200,
        message: "faculty page"
    }

res.status(response.status).sendFile(path.join(__dirname, "..","..", "public","faculty",pageName + ".html"))

}

module.exports.login = function(req, res){
    dispatchPage("faculty-login", res)
}

module.exports.getAllStudents = function(req,res){
         

    var student = [
        {
        firstname: "Biniam",
        lastname: "Arefaine",
        studentid: 112323,
        studententry: "fall",
    },
    {
        firstname: "Eyob",
        lastname: "Arefaine",
        studentid: 112323,
        studententry: "spring"
    }
    ]
    
    res.status(200).json(student)
    dispatchPage("get-all-students", res)
}

module.exports.update = function(req,res){
    var studentid = req.params.id;
    console.log(studentid + "  === " + req.body.firstname)

    var student = 
        {
        _id:1,
        firstname: "Biniam",
        lastname: "Arefaine",
        studentid: 112323,
        studententry: "fall",
    }

    if(student){
        console.log("inside ----")

        student.firstname = req.body.firstname;
        student.lastname = req.body.lastname;
        student.studentid = req.body.studentid;
        student.studententry = req.body.studententry;
    }

    
    res.status(201).json(student);

    dispatchPage("update", res)
}

module.exports.registerStudent = function(req,res){

    if(req.body){

        var student = {
            _id: isValidObjectId,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            studentid : req.body.studentid,
            studententry : req.body.studententry
        }
    }
        
    res.status(201).json(student);
    dispatchPage("create-profile", res)
}

module.exports.qrCamera = function(req, res){
    dispatchPage("qr-reader-camera", res)
}

module.exports.attendance= function(req, res){
    dispatchPage("attendance", res)
}


