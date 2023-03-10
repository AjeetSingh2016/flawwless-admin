const { model, Schema } = require("mongoose");

const postSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
        },
        body:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        slug:{
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        date:{
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'user', 
            required: true,
        }

    },
    { timestamps: true }
);

module.exports = model('post', postSchema)