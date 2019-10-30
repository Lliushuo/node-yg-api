var express = require('express');
var router = express.Router();
const controller = require('../controller/')
//banner
const Banner = require("../model/insert/banner.js")
router.get('/banner', function(req, res, next) {
    bannerModel = Banner.banner.find({})
    bannerModel.exec((err,doc)=>{
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
});
//fenlei
const Classify = require("../model/insert/classify.js")
router.get("/classify", (req, res, next) => {
    classifyModel = Classify.classfl.find({})
    classifyModel.exec((err,doc)=>{
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})
//laber 广告喇叭
const laber = require("../model/insert/laber.js")
router.get("/laber", (req, res, next) => {
    laberModel = laber.laber.find({})
    laberModel.exec((err,doc)=>{
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})
//navlist 导航
const navlist = require("../model/insert/navlist.js")
router.get("/navlist", (req, res, next) => {
    navlistModel = navlist.navlist.find({})
    navlistModel.exec((err,doc)=>{
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})
//惊喜
const surper = require("../model/insert/surper.js")
router.get("/surper", (req, res, next) => {
    surperModel = surper.surper.find({})
    surperModel.exec((err,doc)=>{
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})
//商品
const splist=require("../model/insert/inser_shoplist.js")
router.get('/splist',(req,res,next)=>{
    let page = parseInt(req.param('page')) || 1
    let pageSize = parseInt(req.param('limit')) || 100;
    let name = req.param('name') || ""; 
    let skip = (page-1) * pageSize//1*10
    let sort = req.param('sort') || "1" 
    let classify = req.param('classify') || "" 
    let Price = req.param('price') || "" 
    var reg=new RegExp(name,"g");
    let id = req.param('id') || ""; 
    if(name!=""){
        var splistModel = splist.splist.find({CommodityName:reg}).skip(skip).limit(pageSize)
    }
    else if(id!=""){
        var splistModel = splist.splist.find({_id:id}).skip(skip).limit(pageSize) 
    }
    else if(classify!=""){
        var splistModel = splist.splist.find({ls_tag:classify}).skip(skip).limit(pageSize) 
        
    }
    else if(Price!=""){
        var splistModel = splist.splist.find().sort({OriginalPrice:sort}).skip(skip).limit(pageSize)
        console.log(1); 
    }
    else{
        var splistModel = splist.splist.find().skip(skip).limit(pageSize)
    }
    
    splistModel.exec((err, doc) => {
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    
                    current_total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})
module.exports = router;