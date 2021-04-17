const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.post('/', async (req, res) => {
    const item = new Item({
        title: req.body.title,
    });
    try {
        const savedItem = await item.save();
        res.json(savedItem); // RESPONSE FOR CONSOLE
    } catch (err) {
        res.json({ message: err }); // RESPONSE FOR CONSOLE
    }
});

// GET POST
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items); // RESPONSE FOR CONSOLE
    } catch (err) {
        res.json({ message: err }); // RESPONSE FOR CONSOLE
    }
});

module.exports = router;
