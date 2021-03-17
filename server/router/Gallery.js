const express = require('express');
const { getGallery} = require("../controllers/gallery.controller");
const router = express.Router();

router.get("/", getGallery);




module.exports = router;