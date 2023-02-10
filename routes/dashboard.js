const express= require('express');
const connection= require("../connection");
const router=express.Router();
var auth=require('../services/authentication');

router.get('/details',(req,res,next)=>{
    var  categoryCount;
    var productCount;
   
    var query="select count(id) as categoryCount from category";
    connection.query(query,(err,results)=>{
        if(!err){
            categoryCount= results[0].categoryCount;

        }else{
            return res.status(500).json(err);
        }
    })
    var query="select count(id) as productCount from product";
    connection.query(query,(err,results)=>{
        if(!err){
            productCount =results[0]. productCount;
            var data={
                category:categoryCount,
                product:productCount
            };
            return res.status(200).json(data);

        }else{
            return res.status(500).json(err)
        }
    })

})
module.exports=router;