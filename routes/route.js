const express=require('express');
const router=express.Router();
const Offer=require('../models/offers');

//retreiving data
router.get('/offers',(req, res, next)=>{
Offer.find(function(err,offers){
  res.json(offers);
});


});

//add data
router.post('/offer',(req, res, next)=>{
let newoffer = new Offer({
offer_name : req.body.offer_name,
offer_type : req.body.offer_type
});

newoffer.save((err,offer)=>{
if(err){
res.json({msg: 'Failed to add offer'});

}
else{
res.json({msg: 'Offer added successfully'});

    }

});
  //logic to add data
});

//delete data


  //logic to delete data
router.delete('/offer/:id', (req,res,next)=>{

  Offer.remove({_id:req.params.id}, function(err,result){
    if(err){

      res.json(err);
    }else{
      res.json(result);
    }
  });
});



module.exports=router;
