const mongoose = require("mongoose");
const User = require("./model/User");

mongoose.connect("mongodb://localhost/test_mongo").then(() => {
  console.log("connect to db");
  run();
});

async function run() {
  try {
    // await User.create({
    //   name: "nyi",
    //   age: 19,
    //   email: "nyi@gmail.com",
    //   hobbies: ["game", "gay", "anime"],
    //   address: {
    //     city: "Yangon",
    //     street: "16 road",
    //   },
    // });
    // const user = await User.findById("663702bc8926b2f745da1988");
    // user.bestFriend = "66370376f4551e97686cb5f0";
    // user.save();
    // console.log(user);
    //like adding include in prisma
    // const user = await User.findById("663702bc8926b2f745da1988").populate(
    //   "bestFriend"
    // );
    // console.log(user);

    const users = await User.find().populate("bestFriend");
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
}
