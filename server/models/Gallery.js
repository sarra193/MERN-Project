
const mongoose = require('mongoose');
const gallerySchema = mongoose.Schema({
     title: String,
      description: String,
      image: String,
      likeCount: {
            type: Number,
            default: 0
      },
      createdAt: {
            type: Date,
            default: new Date()
      },
      user:[{ type : mongoose.Schema.Types.ObjectId,ref:'user'}]
});

const Gallery = mongoose.model('Gallery', gallerySchema);
module.exports = Gallery;