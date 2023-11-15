const router=require('express').Router()
const AAbatch=require('../Models/Userschema')

router.delete('/delete/:id',async(req,res)=>{
    try{
        await AAbatch.findByIdAndDelete(req.params.id)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports=router