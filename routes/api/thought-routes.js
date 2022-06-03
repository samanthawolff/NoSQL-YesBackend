const router = require('express').Router();


const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controllers');


//  /api/thoughts
router.route('/').get(getAllThoughts);


//  /apit/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);


//  /api/thoughts/userId
router.route('/:userId').post(createThought);


module.exports = router;