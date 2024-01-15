require('dotenv').config({ path: '../.env' })
const Movie = require('../models/Movie.model');
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/react-movies-api';
mongoose.connect(MONGODB_URI)
    .then((x) => console.log(`Connected to Mongo.Database name: ${x.connections[0].name}`))
    .catch((err) => console.log(`Error connecting to mongo: ${err}`));



const movies = [
    {
        title: "A Wrinkle in Time",
        director: "Ava DuVernay",
        stars: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
        image:
            "https://res.cloudinary.com/djpjutqc3/image/upload/v1705361378/react-movie-app/dd84shlcbqdicclvteah.jpg",
        description:
            "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",

    },
    {
        title: "The Strangers: Prey at Night",
        director: "Johannes Roberts",
        stars: ["Christina Hendricks", "Bailee Madison", "Martin Henderson"],
        image:
            "https://res.cloudinary.com/djpjutqc3/image/upload/v1705361265/react-movie-app/hwl4p18uemdt6e713xwg.jpg",
        description:
            "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",

    },
    {
        title: "The Hurricane Heist",
        director: "Rob Cohen",
        stars: ["Toby Kebbell", "Maggie Grace", "Ryan Kwanten"],
        image:
            "https://res.cloudinary.com/djpjutqc3/image/upload/v1705361114/react-movie-app/stcsjegqzvi9vzlnhvmx.jpg",
        description:
            "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",

    },
    {
        title: "Gringo",
        director: "Nash Edgerton",
        stars: ["Joel Edgerton", "Charlize Theron", "David Oyelowo"],
        image:
            "https://res.cloudinary.com/djpjutqc3/image/upload/v1705360951/react-movie-app/zblwrbwlul7gtvtdxebf.jpg",
        description:
            "GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.",

    },
    {
        title: "Thoroughbreds",
        director: "Cory Finley",
        stars: ["Anya Taylor-Joy", "Olivia Cooke", "Anton Yelchin"],
        image:
            "https://res.cloudinary.com/djpjutqc3/image/upload/v1705360828/react-movie-app/wnqosfaywsrrurckhdqw.jpg",
        description:
            "Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.",

    },
    {
        title: "The Leisure Seeker",
        director: "Paolo Virzì",
        stars: ["Helen Mirren", "Donald Sutherland", "Janel Moloney"],
        image:
            "https://res.cloudinary.com/djpjutqc3/image/upload/v1705360671/react-movie-app/r8zo5uiokmchllw9ekga.jpg",
        description:
            "A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.",

    },
    {
        title: "Black Panther",
        director: "Ryan Coogler",
        stars: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
        image:
            "https://res.cloudinary.com/djpjutqc3/image/upload/v1705360489/react-movie-app/g3walicrrsg0ydvyzo5h.jpg",
        description:
            "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",

    },
    {
        title: "Red Sparrow",
        director: "Francis Lawrence",
        stars: ["Jennifer Lawrence", "Joel Edgerton", "Matthias Schoenaerts"],
        image:
            "https://res.cloudinary.com/djpjutqc3/image/upload/v1705360273/react-movie-app/eynpg5jtgz9j4wvwbk6t.jpg",
        description:
            "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",

    }
];

Movie.create(movies)
    .then((moviesFromDB) => console.log(`${moviesFromDB.length} movies inserted to the database.`))
    .catch((err) => console.log(`Error seeding database: ${err}`));