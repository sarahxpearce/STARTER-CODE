const express = require('express');

const router = express.Router();

const orderingLinks = [
  { label: 'Order on UberEats', href: 'https://www.ubereats.com' },
  { label: 'Order on DoorDash', href: 'https://www.doordash.com' },
];

const menuSections = [
  {
    title: 'Signature donuts',
    items: [
      { name: 'Maple velvet ring', detail: 'Warm maple glaze with brown butter crumble' },
      { name: 'Downtown classic', detail: 'Vanilla bean glaze with rainbow sprinkles' },
      { name: 'Cocoa espresso', detail: 'Dark cocoa cake donut with espresso icing' },
    ],
  },
  {
    title: 'Seasonal picks',
    items: [
      { name: 'Cider twist', detail: 'Apple cider dough, cinnamon sugar finish' },
      { name: 'Berry jam pocket', detail: 'Yeast donut with house-made berry filling' },
      { name: 'Citrus poppy old fashioned', detail: 'Orange zest glaze and toasted poppy seeds' },
    ],
  },
  {
    title: 'Coffee & tea',
    items: [
      { name: 'Downtown drip', detail: 'Single-origin medium roast' },
      { name: 'Vanilla cold brew', detail: 'Slow-steeped with vanilla bean syrup' },
      { name: 'Chai latte', detail: 'Spiced black tea with steamed milk' },
    ],
  },
];

const comments = [];

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Downtown Donuts',
    orderingLinks,
    menuHighlights: menuSections[0].items,
  });
});

router.get('/menu', (req, res) => {
  res.render('menu', { title: 'Menu', orderingLinks, menuSections });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

router.get('/comments', (req, res) => {
  res.render('comments', { title: 'Comments', comments });
});

router.post('/comments', (req, res) => {
  const name = req.body.name?.trim() || 'Guest';
  const message = req.body.message?.trim();

  if (message) {
    const stamp = new Date().toLocaleString();
    comments.unshift({ name, message, time: stamp });
  }

  res.redirect('/comments');
});

module.exports = router;
