const dotenv=require('dotenv').config();
require('./db/index');
const express = require('express');
const corse = require('cors')
const animalRouter=require('./router/animal-router')
const userRouter=require('./router/user-router')
const employeeRouter=require('./router/employee-router')
const app = express();
const passport=require('passport')
require('./config/passport')(passport)
const path = require('path');
const PORT = process.env.PORT;
app.use(passport.initialize());
app.use(corse());
app.use(express.json());
app.use('/animal',passport.authenticate('jwt',{session:false}),animalRouter)
app.use('/employee',passport.authenticate('jwt',{session:false}),employeeRouter)
app.use('/user',userRouter)

app.listen(PORT)

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname,'client/build')))
//     app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'../client/build','index.html')))
// }
