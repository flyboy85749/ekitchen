const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  comment: {
    type: String,
  },
});

module.exports = mongoose.model('Testimonial', TestimonialSchema)