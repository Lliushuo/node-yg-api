const db = require("../../utils/database.js")
const mySchema = new db.Schema({
    componentBase:Object,
    adPictures:Object

})

const Classify  = db.model("surper", mySchema) 
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
    surper:Classify

}