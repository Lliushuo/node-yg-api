const db = require("../../utils/database.js")
const mySchema = new db.Schema({
    fastReportId: String,
        fastReportTitle: String,
        hrefType: Number,
        hrefValue:String,
        applyTerminal: Number

})

const Classify  = db.model("laber", mySchema) 
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
    laber:Classify
}