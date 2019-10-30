const db = require("../../utils/database.js")
const mySchema = new db.Schema({
    adPictureId: String,
    framesIndex: Number,
    adName: String,
    pictureUrl: String,
    hrefType: Number,
    hrefValue: String,
    applyTerminal: Number,
    title: String,
    subTitle: String

})

const Classify  = db.model("banners", mySchema) 
const insert = (data)=>{
    return Classify.insertMany(data)
                   .then(res=>{
                       return true
                   })
                   .catch(err=>{
                       return false
                   })
}
module.exports = {
    insert,
    banner:Classify
}