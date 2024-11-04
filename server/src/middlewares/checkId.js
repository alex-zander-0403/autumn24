module.exports = (req, res, next) => {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) {
    return res.status(400).json({ message: 'id должен быть числом' });
  }
  res.locals.id = id;
  next();
};
