const express = require('express')
const router = express.Router()
const user = require("../models/userDB.js")

router.get('/user', async (req, res) => {
    const data = await user.find();
    res.json(data)
})

router.post('/user', async (req, res) => {
    try {
        
        const data = await user.create(req.body);
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router
