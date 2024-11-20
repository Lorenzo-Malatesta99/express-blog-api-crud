const posts = require("../data/posts.js");

function index(req, res) {
  console.log("Ecco i post!");
  res.json(posts);
}

function show(req, res) {
  const id = parseInt(req.params.id);
  console.log(`Ecco il post con id: ${id}`);
  const findPost = posts.find((post) => post.id === id);
  if (!findPost) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(findPost);
}

function store(req, res) {}

function update(req, res) {}

function modify(req, res) {}

function destroy(req, res) {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1) {
    return res.status(204).json({ error: "Post not found" });
  }
  posts.splice(postIndex, 1);
  res.json(posts);
}

module.exports = { index, show, store, update, modify, destroy };