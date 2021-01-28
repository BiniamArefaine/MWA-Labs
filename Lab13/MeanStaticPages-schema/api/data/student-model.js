var mongoose= require("mogoose");


const attendanceSchema = new mongoose.Schema({
    studentid:{
        type:String,
        required:true,
        unique:true
    },

    lastname:{
        type: String
    },
    attendance:{
        type:Boolean,
        required:true
    },
    date:{
        type: Date,
    }
})

const qrSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    }

})

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})
const studentSchema = new mongoose.Schema({
    
    firstname:String,
    lastname: String,
    studentid:String,
    user:userSchema,
    qr:qrSchema,
    attendance: [attendanceSchema]
   
})