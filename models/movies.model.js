const { Schema, model } = require("mongoose");
require('./Celebrity.model')

const moviesSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast :[{
      type: Schema.Types.ObjectId,
      ref: 'celebrities'
    }]
  },
  
  {
    timestamps: true
  }
);

const moviesModel = model("movies", moviesSchema);

module.exports = moviesModel;