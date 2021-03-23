const express = require('express');
const { getEvents, createEvents,updateEvents ,deleteEvents,likeEvent,numParticEvent, getEventsById} = require("../controllers/events.controller");
const router = express.Router();
const isAuth = require("../middleware/passport-setup");

router.get("/", getEvents);
router.get("/:id", getEventsById);
router.post("/", createEvents)
router.patch("/:id", updateEvents)
router.delete("/:id", deleteEvents);
router.patch("/:id/likeEvent", likeEvent)
router.patch("/:id/numParticEvent",numParticEvent)



module.exports = router;