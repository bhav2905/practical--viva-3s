const jwt = require("jsonwebtoken");

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.send("User not found");

  const valid = await bcrypt.compare(req.body.password, user.passwordHash);

  if (!valid) return res.send("Wrong password");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    "secret",
    { expiresIn: "1h" }
  );

  res.json({ token });
});