const router = require("express").Router();

const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    deleteReaction,

} = require("../../controllers/thoughts-controller");




// Set up GET all and POST at /api/thoughts
router.route("/").get().post();

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router.route("/:id")
    
    
    
.get()

    
    
.put()

    
    

.delete();

module.exports = router;
