const router = require("express").Router();

const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    deleteReaction,

} = require("../../controllers/thought-controller");




// Set up GET all and POST at /api/thoughts
router
    
    .route("/")
    
    .get(getAllThoughts)
    
    .post(addThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    
    .route("/:thoughtId")
    
    .get(getThoughtById)

    .put(updateThought)

    .delete(removeThought);


// Set up GET one, PUT, and DELETE at /api/reaction
router
    
    .route('/:toughtId/reactions')
    
    .post(addReaction)

    .delete(deleteReaction);


module.exports = router;
