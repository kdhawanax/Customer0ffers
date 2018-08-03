const mongoose=require('mongoose');


const OfferSchema=mongoose.Schema({
offer_name:{
  type:String,
  required:true
},
offer_type:{
  type:String,
  requried:true
}

});

const Offer=module.exports=mongoose.model('Offer',OfferSchema);
