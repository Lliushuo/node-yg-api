const db = require("../../utils/database.js")
const mySchema = new db.Schema({
    navId: String,
        navIndex: Number,
        navName: String,
        length:Number,
        width: Number,
        pictureUrl: String,
        hrefType: Number,
        hrefValue: String,
        fontColor: String,
        backgroudColor: String

})

const Classify  = db.model("navlist", mySchema) 
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
    navlist:Classify
}