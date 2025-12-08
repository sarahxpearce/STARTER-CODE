const express = require('express');

const router = express.Router();

const orderingLinks = [
  { label: 'Order on UberEats', href: 'https://www.ubereats.com' },
  { label: 'Order on DoorDash', href: 'https://www.doordash.com' },
];

const menuSections = [
  {
    title: 'Donuts',
    items: [
      { name: 'Classic Glazed', detail: 'Lorem ipsum lorem ipsum lorem ipsum.' },
      { name: 'Chocolate Sprinkle', detail: 'Lorem ipsum lorem ipsum lorem ipsum.' },
      { name: 'Maple Bar', detail: 'Lorem ipsum lorem ipsum lorem ipsum.' },
    ],
  },
  {
    title: 'Coffee & Tea',
    items: [
      { name: 'Drip Coffee', detail: 'Lorem ipsum lorem ipsum lorem ipsum.' },
      { name: 'Vanilla Latte', detail: 'Lorem ipsum lorem ipsum lorem ipsum.' },
      { name: 'Iced Matcha', detail: 'Lorem ipsum lorem ipsum lorem ipsum.' },
    ],
  },
  {
    title: 'Seasonal',
    items: [
      { name: 'Berry Filled', detail: 'Lorem ipsum lorem ipsum lorem ipsum.' },
      { name: 'Pumpkin Spice', detail: 'Lorem ipsum lorem ipsum lorem ipsum.' },
      { name: 'Cinnamon Twist', detail: 'Lorem ipsum lorem ipsum lorem ipsum.' },
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
