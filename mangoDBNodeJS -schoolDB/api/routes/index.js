var express = require("express");
var router = express.Router();
var studentcontrollers =require("../controllers/students-controllers");
const controllerPublisher = require("../controllers/address-controller");

router.route("/api/students").get(studentcontrollers.getAllStudents);
router.route("/api/students/:studentId").get(studentcontrollers.getOneStudent);
router.route("/api/students/:studentId/addresses").get(controllerPublisher.addressesGetAll);
router.route("/api/students/:studentId/addresses/:addressId").get(controllerPublisher.addressGetOne);
module.exports=router;