//引入mongoose模块
const db = require("../../utils/database.js")
//设置Schema规范
const mySchema = new db.Schema({
        ls_tag:String,
        times:String,
        CategoryId: String,
        CommodityId: String,
        CommodityCode: String,
        CommodityName: String,
        MaxLimitCount: Number,
        OriginalPrice: String,
        SellPrice: String,
        State: Number,
        Spec: String,
        CommoditySpec: String,
        SmallPic: String,
        ShowOriginalPrice:Boolean,
        SubTitle: String,
        PromotionTag: String,
        CouponTag: String,
        CommodityTag: Number,
        CommodityTagPicture: String,
        CanAddToCart: Boolean,
       
})
const Shoplist  = db.model("shoplist", mySchema) 
const insert = (data)=>{
    return Shoplist.insertMany(data)
                   .then(res=>{
                       return true
                   })
                   .catch(err=>{
                       return false
                   })
}
module.exports = {
    insert,
    splist:Shoplist
}