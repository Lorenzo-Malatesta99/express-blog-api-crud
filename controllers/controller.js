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

function store(req, res) {
  const { title, slug, content, image, tags } = req.body;
  console.log("Dati in arrivo:", req.body);
  const newPost = {
    id: posts.length + 1,
    title,
    slug,
    content,
    image,
    tags,
  };
  posts.push(newPost);
  console.log("Nuovo post creato:", newPost);
  res.status(201).json(newPost);
}


function update(req, res) {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  posts[postIndex] = { id, title, content };
  console.log("Post aggiornato:", posts[postIndex]);
  res.json(posts[postIndex]);
}

function modify(req, res) {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  if (title) post.title = title;
  if (content) post.content = content;
  console.log("Post modificato:", post);
  res.json(post);
}

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
