const router = require("express").Router();

const {
    createThoughts,
    getAllThoughts,
    getThoughtById,
    updateThoughtById,
    deleteThoughtById,
    addReaction,
    deleteReaction,

} = require("../../controllers/thoughts-controller");




// Set up GET all and POST at /api/thoughts
router
    
    .route("/")
    
    .get(getAllThoughts)
    
    .post(createThoughts);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    
    .route("/:thoughtid")
    
    .get(getThoughtById)

    .put(updateThoughtById)

    .delete(deleteThoughtById);


// Set up GET one, PUT, and DELETE at /api/reaction
router
    
    .route('/:toughtId/reactions')
    
    .post(addReaction)

    .delete(deleteReaction);


module.exports = router;
