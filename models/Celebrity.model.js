const { Schema, model } = require("mongoose");

const celebritySchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  },
  {
    timestamps: true
  }
);

const CelebrityModel = model("celebrities", celebritySchema);

module.exports = CelebrityModel;
