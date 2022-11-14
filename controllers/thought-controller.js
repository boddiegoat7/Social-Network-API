const { Thought, User } = require("../models");

const thoughtController = {
  addThought({ params, body }, res) {

    console.log(params);
    Thought.create(body)
      
      .then((dbThoughtData) => {

        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }

        );

      })

      .then((dbUserData) => {

        console.log("!dbUserData", !dbUserData);
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;

        }

        res.json({ message: "Thought has been inserted" });
      })

      .catch((err) => res.json(err));
    
  },

  removeThought({ params }, res) {

    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.json(err));
    
  },

  getAllThoughts(req, res) {

    Thought.find({})
      .then((dbthoughtData) => res.json(dbthoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  getThoughtById({ params }, res) {

    Thought.findOne({ _id: params.thoughtId })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  updateThought({ params, body }, res) {

    Thought.findOneAndUpdate({ _id: params.thoughtId }, body, {
      new: true,

    })
      
      .then((dbThoughtData) => {

        if (!dbThoughtData) {
          return;

        }

        res.json(dbThoughtData);

      })

      .catch((err) => res.json(err));
  },

  // add reaction to thought
  addReaction({ params, body }, res) {

    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { replies: body } },
      { new: true, runValidators: true }

    )

      .then((dbUserData) => {
        if (!dbUserData) {
          return;

        }

        res.json(dbUserData);
      })

      .catch((err) => res.json(err));
    
  },

  // remove reaction

  deleteReaction({ params }, res) {

    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }

    )

      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
    
  },
  
};

module.exports = thoughtController;
