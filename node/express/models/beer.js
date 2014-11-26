var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , BeerSchema = new Schema({
      name: { type: String, default: '', required: true },
      description: { type: String, default: '' },
      alcohol: { type: Number, min: 0},
      price: { type: Number, min: 0},
      category: { type: String, default: ''},
      created_at: { type: Date, default: Date.now }
    })
  ;

module.exports = mongoose.model('Beer', BeerSchema);

