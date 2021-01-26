var path = require("path")

const dispatchPage = function(pageName, res){
    console.log("Request students index page")
    const response = {
        status: 200,
        message: "faculty page"
    }

res.status(response.status).sendFile(path.join(__dirname, "..","..", "public","faculty",pageName + ".html"))

}
// module.exports.facultyIndex= function(req,res){
//     dispatchPage("index", res);
// }

module.exports.login = function(req, res){
    dispatchPage("faculty-login", res)
}

module.exports.getAllStudents = function(req,res){
    dispatchPage("get-all-students", res)
}

module.exports.update = function(req,res){
    dispatchPage("update", res)
}

module.exports.registerStudent = function(req,res){
    dispatchPage("create-profile", res)
}

module.exports.qrCamera = function(req, res){
    dispatchPage("qr-reader-camera", res)
}


