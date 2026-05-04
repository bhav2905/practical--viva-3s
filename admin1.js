app.post("/product", auth, isAdmin, async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

app.put("/product/:id", auth, isAdmin, async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json(updated);
});

app.delete("/product/:id", auth, isAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});
