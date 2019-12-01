var express = require('express');
var db = require('../db');

var router=express.Router();
const connection=db.connect();
router.get("/",(request,response)=>{
    var querytext=`select * from product`;
    connection.query(querytext,(error,result)=>{
        if(error==null)
        {
            response.send(JSON.stringify(result))
        }
        else{
            response.send(JSON.stringify(error))
        }

     })
})
router.post("/",(request,response)=>{
    const{title,description,price}=request.body;
    var querytext=`insert into product(title,description,price) values('${title}','${description}',${price})`;
    connection.query(querytext,(error,result)=>{
        if(error==null)
        {
            response.send(JSON.stringify(result))
        }
        else{
            response.send(JSON.stringify(error))
        }
     })
})
module.exports=router;