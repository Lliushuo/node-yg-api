const db = require("../../utils/database.js")
const mySchema = new db.Schema({
      CategoryId: String,
      CategoryCode: String,
      CategoryName: String,
      Childs: Object,
      Grade: Number,
      HighId: String,
      PictureUrl: String,
      PriorId: String
})

const Classify  = db.model("classifies", mySchema) 
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
    classfl:Classify
}