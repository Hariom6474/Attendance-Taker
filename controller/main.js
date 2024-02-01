const User = require("../models/class");

exports.postAddIndex = async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getIndex = async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
