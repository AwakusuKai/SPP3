const Router = require("express");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const router = new Router();
const authMiddleware = require("../middleware/auth.middleware");

router.post(
  "/registration",
  [
    check("email", "Uncorrected email").isEmail(),
    check("password", "Incorrect password").isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Uncorrect request", errors });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with email ${email} already exist` });
      }
      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User({ email, password: hashPassword });
      await user.save();
      return res.status(200).json({ message: "User was created" });
    } catch (e) {
      console.log(e);
      res.send({ message: "Server error" });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.status(404).json({ message: "Uncorrect password" });
    }
    const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
      expiresIn: "1h",
    });
    console.log(user);
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
    
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

router.get("/auth", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });

    const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
      expiresIn: "1h",
    });
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

module.exports = router;