const express = require('express')
const router = express.Router()
const user = require("../models/userDB.js")
const jwt = require('jsonwebtoken')
const secretCode = process.env.secretCode

const generateToken = (user) => {
    return jwt.sign(user.toJSON(), secretCode, { expiresIn: '1hr' });
}


// GET request
router.get('/user', async (req, res) => {
    try {
        const data = await user.find();
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ mssg: err.mssg });
    }
})

router.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    const data = await user.findById(id);
    res.status(200).json(data);
})


// POST request
router.post('/user', async (req, res) => {
    try {
        const data = await user.create(req.body);
        const token = generateToken(data);
        res.status(200).json({ user: data, token: token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// PUT request
router.put('/user/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await user.findByIdAndUpdate(id, {
            $set: {
                userName: req.body.userName,
                name: req.body.name,
                email: req.body.email,
                country: req.body.country,
                password: req.body.password
            }
        }, { new: true });

        res.status(200).json(data);

    } catch (err) {
        res.status(500).json({ mssg: err.mssg });
    }
});




// DELETE request
router.delete('/user', async (req, res) => {
    try {
        await user.deleteMany();
        res.status(200).json();
    } catch (err) {
        res.status(500).json({ mssg: err.mssg });
    }
});

router.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await user.findByIdAndDelete(id);
        res.status(200).json({
            mssg: "User deleted successfully"
        });
    }
    catch (err) {
        res.status(400).json({ mssg: err.mssg })
    }
})


module.exports = router
