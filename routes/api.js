var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/recipes', function (req, res, next) {
  db.Recipes.findAll({
    include: [{
      model: db.Categories,
      as: 'categories',
      through: {
        attributes: [], // leaves off the response from the join table, useless
      }
    }]
  })
    .then(data => {
      res.json(data);
    })
});

/* GET single entry */
router.get('/recipes/:id', function (req, res, next) {
  db.Recipes.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: db.Categories,
      as: 'categories',
      through: {
        attributes: [],
      }
    }]
  })
    .then(data => {
      res.json(data);
    })
})

/* POST single entry */
router.post('/recipes', function (req, res, next) {
  const { name, review, description, url, likes, vegetarian, vegan, gf, categories } = req.body;

  if (!name) { res.status(400).json({ error: 'name field is required' }) }
  if (!review) { res.status(400).json({ error: 'review field is required' }) }
  if (!url) { res.status(400).json({ error: 'url field is required' }) }

  db.Recipes.create({
    name: name,
    review: review,
    description: description || '',
    url: url,
    likes: likes || 0,
    vegetarian: vegetarian || false,
    vegan: vegan || false,
    gf: gf || false
  })
    .then(recipe => {
      return recipe.addCategories(categories)
        .then(categories => {
          res.status(201).json(recipe);
        })
    })
    .catch(error => {
      if (error.name === 'SequelizeForeignKeyConstraintError') {
        res.json({ error: 'could not find all categories' })
      } else {
        res.json({ error: 'Server Error' })
      }
    })
})

/* DELETE single post */
router.delete('/recipes/:id', function (req, res, next) {
  db.Recipes.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(number => {
      if (number > 0) {
        res.status(204).json({});
      } else {
        res.status(404).json({ error: `could not find recipe with id ${req.params.id}` })
      }
    })
})

module.exports = router;
