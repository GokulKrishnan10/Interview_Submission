const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
	email: {type:String, required:true, unique:true},
	phonenumber: {type:String, required:true, unique:true},
	password: {type:String, required:true},
})
const User=mongoose.model("User-data", UserSchema)
module.exports=User
