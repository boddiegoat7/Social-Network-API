const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/users-controller');

//Set up GET all and Post at /api/social-network


router
    .route('/')
    
    .get(getAllUsers)
    
    .post(createUser);


// Set up GET one, PUT, and DELETE at /api/Userss/:id
router
    .route('/:id')
    
    .get(getUserById)
    
    .put(updateUser)
    
    .delete(deleteUser)


router
    .route('/:userId/friends/:friendId')
    
    .post(addFriend)
    
    .delete(deleteFriend);


module.exports = router;