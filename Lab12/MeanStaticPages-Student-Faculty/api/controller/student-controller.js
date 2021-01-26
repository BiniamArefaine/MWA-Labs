var path = require("path")

const dispatchPage = function(pageName, res){
    console.log("Request students index page")
    const response = {
        status: 200,
        message: "index page"
    }

    res.status(response.status).sendFile(path.join(__dirname, "..","..", "public","students",pageName + ".html"))

}
module.exports.studentsIndex= function(req,res){
    console.log("inside ------")
    dispatchPage("index", res);
}
// module.exports.homePage = function(req, res){
//     res.status(200).sendFile(path.join(__dirname, "..","..", "public","index.html"))}

module.exports.login = function(req, res){
    dispatchPage("student-login", res)
}

module.exports.create = function(req,res){
    dispatchPage("create-profile", res)
}

module.exports.loggedInStudent = function(req,res){
    dispatchPage("loggedInStudent", res)
}

module.exports.update = function(req,res){
    dispatchPage("update", res)
}

module.exports.qrcode = function(req,res){
    dispatchPage("qr-code", res)
}




