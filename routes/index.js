const express = require('express');

const router = express.Router();

const orderingLinks = [
  { label: 'Order on UberEats', href: 'https://www.ubereats.com' },
  { label: 'Order on DoorDash', href: 'https://www.doordash.com' },
];

const menuSections = [
  {
    title: 'Lorem ipsum',
    items: [
      { name: 'Lorem ipsum', detail: 'Lorem ipsum dolor sit amet' },
      { name: 'Consectetur elit', detail: 'Sed do eiusmod tempor incididunt' },
      { name: 'Dolor sit amet', detail: 'Ut labore et dolore magna aliqua' },
    ],
  },
  {
    title: 'Dolor sit amet',
    items: [
      { name: 'Lorem ipsum', detail: 'Lorem ipsum dolor sit amet' },
      { name: 'Consectetur elit', detail: 'Sed do eiusmod tempor incididunt' },
      { name: 'Dolor sit amet', detail: 'Ut labore et dolore magna aliqua' },
    ],
  },
  {
    title: 'Consectetur elit',
    items: [
      { name: 'Lorem ipsum', detail: 'Lorem ipsum dolor sit amet' },
      { name: 'Consectetur elit', detail: 'Sed do eiusmod tempor incididunt' },
      { name: 'Dolor sit amet', detail: 'Ut labore et dolore magna aliqua' },
    ],
  },
];

const comments = [];

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Lorem ipsum',
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
