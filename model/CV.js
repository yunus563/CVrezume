const mongoose = require('mongoose')
const Schema = mongoose.Schema({
  name: {
    type: String,
    
},
  coment: {
    type: String,
}
})

module.exports = mongoose.model('CVcomment', Schema)
