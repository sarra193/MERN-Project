const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
      title: String,
      description: String,
      creator: String,
      tags: [String],
      image: String,
      date: String,
      likeCount: {
            type: Number,
            default: 0
      },
      createdAt: {
            type: Date,
            default: new Date()
      }
});

const Events = mongoose.model('Event', eventsSchema);
module.exports = Events;