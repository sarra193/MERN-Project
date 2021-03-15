const Events = require("../models/Events");

exports.getEvents = async(req, res) => {
      try {
            const events = await Events.find();
      
            res.status(200).json(events);
            
      } catch (error) {
            res.status(401).json({msg:error.msg});

            
      }
}



exports.createEvents = async (req, res) => {
      const event = req.body;

      const newEvent = new Events(event);
      try {
            
            await newEvent.save();
            res.status(201).json(newEvent);
            
      } catch (error) {
            res.status(409).json({ msg: error.msg });
      }
};

