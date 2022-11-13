const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {

    username: {
        type: String,
        required: true,
        trim: true,
        unique :true 
    },
    email: { 
        type: String,
        required: true,
        unique :true,
        match: /.+\@.+\..+/
    },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref:'Thought'
            }
        ],

    
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref:'User'
            }
        ],
    
        
    },

    {
    
    toJSON: {
        virtuals: true,
        getters: true
        },
        
    }

);

UserSchema.virtual('friendCount').get(function() {
    
    return this.friends.length

});


//creates the user model using the UserSchema 

const User = model('User', UserSchema);

//exports the user model
module.exports = User;


