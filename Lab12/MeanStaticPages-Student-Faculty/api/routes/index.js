var express = require("express");
var router = express.Router();
const studentController = require("../controller/student-controller")
const facultyController = require("../controller/faculty-controller")


// router.route("/")
// .get(studentController.homePage)

router.route("/attendance/students/loggedin")
.get(studentController.loggedInStudent)

router.route("/attendance/students/index")
.get(studentController.studentsIndex)

router.route("/attendance/students/login")
.get(studentController.login)

router.route("/attendance/students/register")
.get(studentController.create)

router.route("/attendance/students/update")
.get(studentController.update)

router.route("/attendance/students/qrcode")
.get(studentController.qrcode)


router.route("/attendance/faculty/get-all-students")
.get(facultyController.getAllStudents)

router.route("/attendance/faculty/login")
.get(facultyController.login)

router.route("/attendance/faculty/update")
.get(facultyController.update)

router.route("/attendance/students/register/student")
.get(facultyController.registerStudent)

router.route("/attendance/faculty/qrcode-camera")
.get(facultyController.qrCamera)







module.exports=router;