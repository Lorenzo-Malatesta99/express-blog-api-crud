const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const postsRouter = require("./routers/router.js");
const bodyParser = require("body-parser");

app.use(express.static("public"));

app.use(express.json());

app.use(bodyParser.json());

app.use(cors())

app.get("/", (req, res) => {
  console.log("Questa è la root!");
  res.send("Hello World!");
});

app.use("/posts", postsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Qualcosa è andato storto!");
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint non trovato" });
});

app.listen(port, () => {
  console.log(`Il server sta ascoltando sulla porta: ${port}`);
});
