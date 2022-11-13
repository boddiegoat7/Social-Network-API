const { User } = require("../models");

const userController = {

  
  getAllUsers(req, res) {
    
    User.find({})
      
      .select("-__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        
        console.log(err);
        res.sendStatus(400);

      });
    
  },


  getUserById({ params }, res) {

    User.findOne({ _id: params.id })
      
      .populate({ path: "thoughts", select: "-__v" })
      .populate({ path: "friends", select: "-__v" })
      .select("-__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
      
        console.log(err);
        res.sendStatus(400);
      
      });
    
  },


  
  createUser({ body }, res) {

    User.create(body)
      
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
    
  },


  updateUser({ params, body }, res) {

    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },



  deleteUser({ params }, res) {

    User.findOneAndDelete({ _id: params.id })
      
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
    
  },

  addFriend({ params }, res) {

    User.findOneAndUpdate(
    
      //targets user by id
      { _id: params.userId },
      //adds friend to the friend array in the user model
      { $addToSet: { friends: params.friendId } },
      { new: true, runValidators: true }

    )
      
      .then((dbUserData) => {

        console.log(dbUserData);
        if (!dbUserData) {
          res.status(404).json({ message: "User does not exist" });
          return;
        }

        res.json(dbUserData);
      })

      .catch((err) => res.json(err));
  },

  deleteFriend({ params }, res) {

    User.findOneAndUpdate(
    
      { _id: params.userId },
      //removes friend from friend array in the user model
      { $pull: { friends: params.friendId } },
      { new: true }

    )
      
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  
  },
  
};

module.exports = userController;
