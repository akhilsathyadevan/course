const express=require('express');
const app= new express();
const signupdata=require('./src/models/signupdata')
const cors= require('cors');
const bodyparser=require('body-parser');
const port=process.env.PORT || 3000;
const jwt= require('jsonwebtoken');
const professordata = require('./src/models/professordata');
const studentdata = require('./src/models/professordata');
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
});
app.post('/signup',function(req,res){
    console.log(req.body.user);
    
    var x={
        name:req.body.user.name,
        email:req.body.user.email,
        phone:req.body.user.phone,
        role:req.body.user.role,
        password:req.body.user.password,
        password1:req.body.user.password1
    }
    var n=new signupdata(x)
    n.save();
})

app.post("/login",function(req,res){
    let session='';
    let role='';
    console.log("from frontend"+req.body.user.email,req.body.user.password);
    console.log("enterd")
    signupdata.findOne({'email': req.body.user.email, 'password': req.body.user.password })
         .then(function (obj,err) 
         {
            if (obj != null)
             {
                 if(obj.role=='Professor'){
                    console.log("entered professor session");
                    let id = obj._id;
                    let role=obj.role;
                    console.log(obj._id);
                    let uname=req.body.user.email;
                    let pswd=req.body.user.password;
                    let payload = {subject:uname+pswd}
                    let token = jwt.sign(payload,'secretKey')
                     session ='professorsession';
                    res.status(200).send({token,session,id,role});
                    console.log({token,session,role,id})

                 }
                if(obj.role=='Student'){
                    console.log("entered student session");
                    let id = obj._id;
                    let role=obj.role;
                    console.log(obj._id);
                    let uname=req.body.user.email;
                    let pswd=req.body.user.password;
                    let payload = {subject:uname+pswd}
                    let token = jwt.sign(payload,'secretKey')
                     session ='studentsession';
                    res.status(200).send({token,session,id,role});
                    console.log({token,session,role})

                }
                
             }
            else{
                let message = 'No User Found'
                res.status(401).send({ message })
            }
        })
    
        .catch((err) => {
        console.log('Error: ' + err);
        })
    
})
app.post('/addprofessor',function(req,res){
    console.log("entered to professor section");
    console.log(req.body.user);
    var newdata={
        name: req.body.user.name,
        email:req.body.user.email,
        qualification:req.body.user.qualification,
        working:req.body.user.working,
        Current_Job_Position:req.body.user.Current_Job_Position,
        previous_experience:req.body.user.previous_experience
    }
    var professor=new professordata(newdata);
    professor.save();
})
app.post('/addstudent',function(req,res){
    console.log("entered to student section");
    console.log(req.body.user);
    var student={
        name: req.body.user.name,
        email:req.body.user.email,
        qualification:req.body.user.qualification,
        markpercent: req.body.user.qualification,
        passout_year:req.body.user.passout_year

    }
    var x=new studentdata(student);
    x.save();
})
app.get('/students',function(req,res){
    studentdata.find()
    .then(function(student){
        res.send(student);
    })
})


app.listen(port,()=>{console.log('server at '+port)});