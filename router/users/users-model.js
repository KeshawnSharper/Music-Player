const mongoose = require("mongoose");

const UsersShema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength:255,
      minlength:100
  },
  password: {
    type: String,
    required: true,
    maxlength:255,
    minlength:100
  },
  email : {
      type: String,
      required:true,
      maxlength:255,
      minlength:100
  },
  id:{
    type: String,
      required:true,
      maxlength:255,
      minlength:100
  }
});

module.exports = mongoose.model("users", UsersShema);