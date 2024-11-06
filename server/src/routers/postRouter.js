const postRouter = require('express').Router();
const { Post } = require('../../db/models');
const checkId = require('../middlewares/checkId');

postRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const allPosts = await Post.findAll();
      res.json(allPosts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message, text: 'Ошибка получения allPosts' });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, desc, url } = req.body;
      if (!title || !desc || !url) {
        return res.status(400).json({ message: 'некорректные данные' });
      }
      const newPost = await Post.create({ title, desc, url });
      res.send(newPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message, text: 'Ошибка получения allPosts' });
    }
  });

postRouter.route('/:id').delete(checkId, async (req, res) => {
  try {
    const { id } = res.locals; // через checkId
    await Post.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, text: 'Ошибка удаления' });
  }
});

module.exports = postRouter;
