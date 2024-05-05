const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  city: String,
  street: String,
});

const UserSchema = mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 18,
  },
  email: {
    type: String,
    required: true,
    minLength: 7,
    lowercase: true,
  },
  createAt: {
    type: Date,
    immutable: false,
    default: () => Date.now(),
  },
  updateAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId, //reference to another user obj(document) based on the ObjectId
    ref: "User", //referencing the User model
  },
  hobbies: [String], //string[]
  address: AddressSchema,
});

module.exports = mongoose.model("User", UserSchema);
