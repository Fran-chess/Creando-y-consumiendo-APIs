const db = require('../../database/models');

const moviesAPIController = {
    'list': (req, res) => {
        db.Movie.findAll() // Promise
            .then(movies => {
                return res.json({
                    code: 200,
                    msg: 'success',
                    data: movies
                });
            })
        ;

    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)// Promise
            .then(movie => {
                return res.json({
                    code: 200,
                    msg: 'success',
                    data: movie
                });
            })
        ;
    },
    create: async (req, res) => {
        try{
            let movieCreated = await db.Movie.create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id,
            })// Promise
            .then(response => {
                return res.json({
                    code: 200,
                    msg: 'success',
                    data: movieCreated
                });
            })
        } catch(error){
            return res.status(500).json({
                msg: "error",
                data: error
            })
        }
        
    }
};

module.exports = moviesAPIController;