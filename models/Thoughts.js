const { Schema, model } = require("mongoose");

const ReactionSchema = new Schema({

    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()

    },

    reactionBody: {
        types: String,
        Required: true,
        maxLength: 280
    
    },

    username: {
        type: String,
        required: true,

    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    
    },

},
    
    
);

    
module.exports = Thoughs;



















