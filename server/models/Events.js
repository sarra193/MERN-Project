const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
      title: String,
      description: String,
      creator: String,
      tags: [String],
      image: String,
      date: Date,
      numOfParticip:Number,
      likeCount: {
            type: Number,
            default: 0
      },
      createdAt: {
            type: Date,
            default: new Date()
      },
      user:[{ type : mongoose.Schema.Types.ObjectId,ref:'User'}]
});

const Events = mongoose.model('Event', eventsSchema);
module.exports = Events;