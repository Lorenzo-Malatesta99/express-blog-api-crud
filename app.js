const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/router.js");

app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Questa è la root!");
  res.send("Hello World!");
});

app.use("/posts", postsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Qualcosa è andato storto!");
});

app.listen(port, () => {
  console.log(`Il server sta ascoltando sulla porta: ${port}`);
});
