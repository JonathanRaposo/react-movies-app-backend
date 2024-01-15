const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        allowed_formats: ['jpg', 'jpeg', 'png'],
        folder: 'react-movie-app',

    }
});

module.exports = multer({ storage: storage });

// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const multer = require('multer');

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET
// });

// const storage = new CloudinaryStorage({
//     cloudinary,
//     params: {
//         allowed_format: ['jpg', 'png', 'jpeg'],
//         folder: 'react-movie-app'
//     }
// })

// module.exports = multer({ storage: storage })

