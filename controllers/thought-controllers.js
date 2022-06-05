const { Thought, User } = require('../models');


const thoughtController = {
    // Get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // Create a thought
    createThought({ params, body}, res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate({ _id: params.userId }, {$push: { thoughts: _id }}, { new: true});
        })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' })
                return;
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.json(err));
    },
}


module.exports = thoughtController;