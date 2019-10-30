const db = require("../../utils/database.js")
const mySchema = new db.Schema({
    username:String,
    password:String,
    createTime:String

})

const Classify  = db.model("user", mySchema) 

module.exports = {
    user:Classify
}