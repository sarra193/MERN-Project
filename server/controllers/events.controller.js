const  mongoose  = require("mongoose");
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

exports.updateEvents = async(req, res) => {
      
      const {id: _id } = req.params
      const event = req.body;
      if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no event with this id');

      const updatedEvent = await Events.findByIdAndUpdate(_id, { ...event, _id }, { new: true });
      res.json(updatedEvent);
}



exports.deleteEvents = async (req, res) => {
      
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no event with this id');

      await Events.findByIdAndRemove(id);
      res.json({ msg: 'post deleted successfully' });
      

}


exports.likeEvent = async (req, res) => {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no event with this id');
      const event = await Events.findById(id);
      const updatedEvents = await Events.findByIdAndUpdate(id, { likeCount: event.likeCount + 1 }, { new: true });
      res.json(updatedEvents);
}