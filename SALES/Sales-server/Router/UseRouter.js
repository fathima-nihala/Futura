const router = require('express').Router();
const { json } = require('express');
const Sales = require('../Modal/UserSchema')

router.post('/post',async(req,res)=>{
    console.log('req',req.body);
    
    const newSales=new Sales(req.body)
    console.log('new-sales',newSales);
    try {
        const savedSales = await newSales.save();
        console.log('saved-sales:',savedSales);
        res.status(200).json(savedSales)
    } catch (error) {
        res.status(500).json(err)
    }
})

router.get('/get',async(req,res)=>{
    try {
        const values=await Sales.find()
        console.log('all data',values);
        res.status(200).json(values)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

module.exports=router