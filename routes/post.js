const express = require('express')
const router = express.Router()
const post = require("../models/postDB.js")



// GET request
router.get('/post', async (req, res) => {
    try {
        const data = await post.find();
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ mssg: err.mssg });
    }
})

router.get('/post/:id', async (req, res) => {
    const id = req.params.id;
    const data = await post.findById(id);
    res.status(200).json(data);
})


// POST request
router.post('/post', async (req, res) => {
    try {
        const data = await post.create(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT request
router.put('/post/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await post.findByIdAndUpdate(id, {
            $set: {
                carName: req.body.carName,
                carImage: req.body.carImage,
                company: req.body.company,
                engineIssue: req.body.engineIssue,
                engineType: req.body.engineType
            }
        }, { new: true });

        res.status(200).json(data);

    } catch (err) {
        res.status(500).json({ mssg: err.mssg });
    }
});



// DELETE request
router.delete('/post', async (req, res) => {
    try {
        await post.deleteMany();
        res.status(200).json();
    } catch (err) {
        res.status(500).json({ mssg: err.mssg });
    }
});

router.delete('/post/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await post.findByIdAndDelete(id);
        res.status(200).json({
            mssg: 'Post deleted successfully'
        });
    } 
    catch (err) {
        res.status(400).json({ mssg: err.mssg });
    }
});

module.exports = router
