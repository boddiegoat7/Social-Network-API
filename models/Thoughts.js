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

    {
        toJSON: {
            getters: true
        
        }
    }

);



const Thoughtschema = new Schema(

    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280
        
        },

        createdAt: {
            type: date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
            
        },

        username: {
            type: String,
            required: true,

        },

        reaction: [ReactionSchema]
        
    },

    {
        toJSON: {
            virtuals: true,
            getters: true
        }

    }


);

Thoughtschema.virtual(`reactionCount`).get(function () {
    return this.reactions.legth;

});


const Though = model(`Thoughts`, ThoughtsSchema);


module.exports = Thoughs;



















