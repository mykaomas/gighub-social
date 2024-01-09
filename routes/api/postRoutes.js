const router = require('express').Router();
const post = require('../../models/Posts');

router.get('/', async (req, res) => {
  const postData = await post.findAll();

  return res.json(postData);
})

router.post('/', async (req, res) => {
  const postData = await post.create(req.body);

  return res.json(postData);
});

module.exports = router;