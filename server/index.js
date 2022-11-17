const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./MODELS/user.model");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/MERN-stack",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully connected");
    }
  }
);

app.post("/api/register", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: "This email is taken" });
    console.log(error);
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    return res.json({ status: "ok", user: true });
  } else {
    return res.json({ status: "error", user: false });
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port number ${PORT}`);
});
