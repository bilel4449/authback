const express=require('express');
const connectDB = require('./config/connectDB');
const app=express();
const user=require('./routes/user')
app.use(express.json());
app.use('/user',user)
// app.use(cors({
//     Origin: 'http://localhost:3000/', // Allow requests from this origin.
//   }));
connectDB();
app.use((req,res)=>{
    res.send("api is running")
})
app.listen(5000,(err)=>err?console.log(err):console.log('server running on port 5000'));
