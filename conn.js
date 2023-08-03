const mongoose= require("mongoose");
const dotenv =require("dotenv")
mongoose.connect("mongodb://localhost:27017/mydata" ,
{useNewUrlParser:true , useUnifiedTopology:true,autoIndex:true}
).then(()=>{
    console.log("conection successfulllll");
}).catch((e)=>{
    console.log("error in connection" + e);
})
module.exports=mongoose;