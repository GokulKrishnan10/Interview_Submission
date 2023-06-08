const mongoose=require('mongoose')
const OrderTable=new mongoose.Schema({
	userId:{type:String, required:true, unique:true},
	orderId:{type:String, required:true, unique:true},
	item:{type:String, required:true},
	price:{type:Number, required:true}
})
const Orders=mongoose.model('orders', OrderTable)
module.exports=Orders
