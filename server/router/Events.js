const express = require('express');
const { getEvents, createEvents,updateEvents ,deleteEvents,likeEvent} = require("../controllers/events.controller");
const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvents)
router.patch("/:id", updateEvents)
router.delete("/:id", deleteEvents);
router.patch("/:id/likeEvent",likeEvent)


module.exports = router;