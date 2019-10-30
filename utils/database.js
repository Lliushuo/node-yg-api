const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yiguo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
module.exports = mongoose
