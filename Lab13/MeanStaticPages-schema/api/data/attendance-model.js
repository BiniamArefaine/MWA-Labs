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

mongoose.model("Attendance", attendanceSchema);
