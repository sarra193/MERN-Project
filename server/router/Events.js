const express = require('express');
const { getEvents, createEvents,updateEvents } = require("../controllers/events.controller");
const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvents)
router.patch("/:id", updateEvents)


module.exports = router;