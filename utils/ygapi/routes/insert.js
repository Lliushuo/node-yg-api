var express = require('express');
var router = express.Router();


//分类插入

const  classify = require("../model/insert/classify.js")//方法引入
const lsclass = require("../data/classify.js")//数据引入
router.get('/classify', function(req, res, next) {
    classify.insert(lsclass).then(result=>{
        if(result){
            res.send({status:result})
        }else{
            res.send({status:false})
        }
    })
});
//商品信息
const sholist = require("../model/insert/inser_shoplist.js")//方法引入
const shoplistdata = require("../data/import.js")//数据引入
router.get('/shoplist', function(req, res, next) {
    sholist.insert(shoplistdata).then(result=>{
        if(result){
            res.send({status:result})
        }else{
            res.send({status:false})
        }
    })
});

//banner
const banner = require("../model/insert/banner.js")//方法引入
const bannedata = require("../data/banner.js")//数据引入
router.get('/banner', function(req, res, next) {
    banner.insert(bannedata).then(result=>{
        if(result){
            res.send({status:result})
        }else{
            res.send({status:false})
        }
    })
});
//navlist
const navlist = require("../model/insert/navlist.js")//方法引入
const navlistdata = require("../data/navlist.js")//数据引入
router.get('/navlist', function(req, res, next) {
    navlist.insert(navlistdata).then(result=>{
        if(result){
            res.send({status:result})
        }else{
            res.send({status:false})
        }
    })
});
//surper
const surper = require("../model/insert/surper.js")//方法引入
const surperdata = require("../data/surper.js")//数据引入
router.get('/surper', function(req, res, next) {
    surper.insert(surperdata).then(result=>{
        if(result){
            res.send({status:result})
        }else{
            res.send({status:false})
        }
    })
});
//广告
const laber = require("../model/insert/laber.js")//方法引入
const laberdata = require("../data/laber.js")//数据引入
router.get('/laber', function(req, res, next) {
    laber.insert(laberdata).then(result=>{
        if(result){
            res.send({status:result})
        }else{
            res.send({status:false})
        }
    })
});
module.exports = router;
