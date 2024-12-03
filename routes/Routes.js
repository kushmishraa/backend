const express = require("express");
const controllers = require('../controller/landingPageController');

const router = express.Router();

const testMiddleWare = (req,res,next) =>{
    console.log(res);
    next();
}

router.get('/',testMiddleWare,(req,res)=>{
    res.status(400).send({value:"hii"});
})

router.post('/test', (req,res)=>{
    console.log(req.body);
    res.end();
})
module.exports =  router ;