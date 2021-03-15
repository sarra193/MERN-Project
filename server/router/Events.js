const express = require('express');
const { getEvents, createEvents } = require("../controllers/events.controller");
const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvents)



module.exports = router;