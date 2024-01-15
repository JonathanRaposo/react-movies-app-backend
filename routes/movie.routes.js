const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');
const mongoose = require('mongoose');

const fileUploader = require('../config/cloudinary.config');

// POST route - Add a movie:

router.post('/api/movies', (req, res, next) => {
    console.log('body: ', req.body)
    const { title, director, stars, description, image } = req.body;

    if (!title || !director || !stars || !description) {
        res.status(400).json({ message: 'All fields are mandatory.' });
        return;
    }
    const splittedStars = stars.split(',');
    Movie.create({ title, director, stars: splittedStars, description, image })
        .then((newMovie) => res.status(201).json(newMovie))
        .catch((err) => res.json(err));

})
router.post('/api/upload', fileUploader.single('imageUrl'), (req, res, next) => {
    if (!req.file) {
        res.status(400).json({ message: 'No file uploaded' });
        return;
    }
    res.status(200).json({ fileUrl: req.file.path })
})

//  search for a movie: 
router.get('/api/movies/search', (req, res, next) => {
    const { q: query } = req.query;

    Movie.find({
        $or: [
            { title: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } }
        ]
    })
        .then((foundMovie) => {
            console.log('found movie: ', foundMovie);
            if (!foundMovie.length) {
                res.status(404).json({ message: `No results for "${query}"` });
                return;
            }
            res.status(200).json(foundMovie)
        })
        .catch((err) => res.json(err));
});

// GET route  - retrieve all the movies:
router.get('/api/movies', (req, res, next) => {

    Movie.find()
        .then((movies) => res.status(200).json(movies))
        .catch((err) => res.json(err));
});
// GET route  - get a random movie:

router.get('/api/movies/random', (req, res, next) => {

    Movie.find()
        .then((movies) => {
            const randomIndex = Math.floor(Math.random() * movies.length)
            res.status(200).json(movies[randomIndex])
        })
        .catch((err) => res.json(err));
})

router.get('/api/movies/:id', (req, res, next) => {
    console.log('params for specific movie', req.params)
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Specified id is not valid.' })
        return;
    }

    Movie.findById(id)
        .then((movie) => {
            console.log('movie: ', movie);
            res.status(200).json(movie)

        })
        .catch((err) => res.json(err));
})

// PUT  route - update a specific movie by id:

router.put('/api/movies/:id', fileUploader.single('imageUrl'), (req, res, next) => {
    const { title, director, stars, description, image } = req.body;
    const { id } = req.params;


    const str = stars.toString();
    const splittedStars = str.split(',')


    if (!title || !director || !stars || !description || !image) {
        res.status(400).json({ message: 'All fields are mandatory.' });
        return;
    }

    let imageUrl;
    if (req.file) {
        imageUrl = req.file.path;
    } else {
        imageUrl = image;
    }
    Movie.findByIdAndUpdate(id, { title, director, stars: splittedStars, description, image: imageUrl }, { new: true })
        .then((updatedMovie) => res.status(200).json(updatedMovie))
        .catch((err) => res.json(err));
})

// DELETE-Route  - delete a specific movie: 

router.delete('/api/movies/:id', (req, res, next) => {
    console.log('movie to be deleted: ', req.params);
    const { id } = req.params;
    Movie.findByIdAndDelete(id)
        .then(() => res.status(200).json({ message: `movie deleted` }))
        .catch((err) => res.json(err));
});

module.exports = router;