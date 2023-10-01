const Jokes = require('../models/jokes.model')

module.exports = {
    findAllJokes: (req, res) => {
        Jokes.find({})
            .then((jokes) =>{
                res.json(jokes)
            })
            .catch((err) => res.json({message: 'Error in controllers for find all jokes', error: err}))
    },
    createJoke: (req, res) => {
        Jokes.create(req.body)
        .then((newJoke) => {
            res.json({ joke: newJoke})
        })
        .catch((err) => res.json({message: 'Error in controllers for create a new joke', error: err}))
    },
    // findOneUser: (req, res) => {
    //     User.findOne({ _id: req.params.id })
    //         .then((oneUser) => {
    //             res.json(oneUser)
    //         })
    //         .catch((err) => res.json({message: 'Error in controllers for find one user', error: err}))
    // },
    updateOneJoke: (req, res) => {
        Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
            .then((updateJoke) => {
                res.json({joke: updateJoke})
            })
            .catch((err) => res.json({message: 'Error in controllers for update one joke', error: err}))
    },
    deleteAnExistingJoke: (req, res) => {
        Jokes.deleteOne({_id: req.params.id})
            .then((deleteJoke) => {
                res.json(deleteJoke)
            })
            .catch((err) => res.json({message: 'Error in controllers for delete one joke', error: err}))
    }

}
