const mongoose =require('mongoose');
const Gallery = require("../models/Gallery");

exports.getGallery = async (req, res) => {
      try {
            const gallery = await Gallery.find();
            res.status(201).json({ msg: gallery });
            
            
      } catch (error) {
            res.status(401).json({ msg: error.msg })
            
      }
};