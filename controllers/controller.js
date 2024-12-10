const posts = require("../data/posts");

const index = (req, res) => {
  res.json(posts);
};

const show = (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post non trovato" });
  }
};

const store = (req, res) => {
  const newPost = req.body;
  newPost.id = (parseInt(posts[posts.length - 1].id) + 1).toString();
  posts.push(newPost);
  res.status(201).json(newPost);
};

const update = (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (post) {
    Object.assign(post, req.body);
    res.json(post);
  } else {
    res.status(404).json({ message: "Post non trovato" });
  }
};

const modify = (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (post) {
    Object.assign(post, req.body);
    res.json(post);
  } else {
    res.status(404).json({ message: "Post non trovato" });
  }
};

const destroy = (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === req.params.id);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Post non trovato" });
  }
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
