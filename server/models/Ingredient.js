const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  amount: {
    type: String,
  }
});

module.exports = mongoose.model('Ingredient', IngredientSchema)