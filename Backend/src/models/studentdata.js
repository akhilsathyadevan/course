const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@akhilprojectfiles.wnbnw.mongodb.net/Course?retryWrites=true&w=majority');
const schema=mongoose.Schema;
const professorSchema= new schema({
    name: String,
    email:String,
    qualification:String,
    working:String,
    Current_Job_Position:String,
    previous_experience:String
});
var professordata=mongoose.model('professordatas',professorSchema);
module.exports=professordata;