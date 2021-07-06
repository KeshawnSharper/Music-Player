const mongoose = require("mongoose");

const UsersShema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength:255,
      minlength:7
  },
  password: {
    type: String,
    required: true,
    maxlength:255,
    minlength:7
  },
  email : {
      type: String,
      required:true,
      maxlength:255,
      minlength:7
  },
  id:{
    type: String,
      required:true,
      maxlength:255,
      minlength:0
  }
});

module.exports = mongoose.model("users", UsersShema);