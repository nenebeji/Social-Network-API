const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment =  require('moment');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => moment(date).format('DD MMM YYYY [at] hh:mm a'),
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        getters: true,
        virtuals: true,
      },
      id: false,
    }
);

// Create a virtual property `reactionCount` that gets the amount of reactions associated with a thought
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize Thought model
const Thought = model('thought', thoughtSchema);
  
module.exports = Thought;