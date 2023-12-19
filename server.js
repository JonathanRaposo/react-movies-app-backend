require('dotenv').config();
const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const app = express();


// database:
require('./db/index');

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';


// middlewares:
app.use(cors({
    origin: [FRONTEND_URL]
}))
app.use(logger('dev'));
app.use(express.json());

const indexRouter = require('./routes/index.routes');
app.use('/', indexRouter);

const movieRouter = require('./routes/movie.routes');
app.use('/', movieRouter);




// error handling middleware:
app.use((req, res, next) => {
    res.status(404).json({ message: '404 - Resource not found.' })
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



