const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const post = require("../models/postDB.js");


// GET request
router.get('/post', async (req, res) => {
    try {
        const data = await post.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/post/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await post.findById(id);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST request validation
router.post('/post', [
    body('carName').notEmpty(),
    body('carImage').notEmpty(),
    body('company').notEmpty(),
    body('engineIssue').notEmpty(),
    body('engineType').notEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const data = await post.create(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT request validation
router.put('/post/:id', [
    body('carName').notEmpty(),
    body('carImage').notEmpty(),
    body('company').notEmpty(),
    body('engineIssue').notEmpty(),
    body('engineType').notEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    try {
        const data = await post.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE 
router.delete('/post', async (req, res) => {
    try {
        await post.deleteMany();
        res.status(200).json({ message: 'All posts deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.delete('/post/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await post.findByIdAndDelete(id);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
