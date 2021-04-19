const { Schema, model } = require("mongoose");
require('./Celebrity.model')

const moviesSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String
  },
  {
  cast : {
    type: Array,
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'celebrities' // defines which collection its coming from
    }
  }
  },
  {
    timestamps: true
  }
);

const moviesModel = model("movies", moviesSchema);

module.exports = moviesModel;