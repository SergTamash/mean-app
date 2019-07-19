const mongoose = require('mongoose');
const Event = mongoose.model('Event');
const User = mongoose.model('User');

const getAuthor = (req, res, callback) => {
    if (req.payload && req.payload.email) {
      User
        .findOne({ email : req.payload.email })
        .exec((err, user) => {
          if (!user) {
            return res
              .status(404)
              .json({"message": "User not found"});
          } else if (err) {
            console.log(err);
            return res
              .status(404)
              .json(err);
          }
          callback(req, res, user);
        });
    } else {
      return res
        .status(404)
        .json({"message": "User not found"});
    }
};

const getEventsList = (req, res) => {
    Event
      .find()
      .exec((err, events) => {
        if (!events) {
          return res
            .status(404)
            .json({"message": "event not found"});
        } else if (err) {
          return res
            .status(404)
            .json(err);
        } else {
          return res
            .status(200)
            .json(events);
        }
      });
}

const createEvent = (req, res) => {
    if (!req.body.name || !req.body.address) {
        return res.status(400)
                  .json({"message": "The event name and address are required"});
    }
    getAuthor(req, res, (req, res, author) => {
        const {name, address, date, members} = req.body;

        const event = new Event();
        event.author = author;
        event.name = name;
        event.address = address;
        // event.date = date;
        event.setMembers(members);

        event.save((err) => {
            if (err) {
                res
                .status(400)
                .json(err);
            } else {
                res
                .status(200)
                .json({event});
            }
        });
    }) 
    
    
}

const getEventById = (req, res) => {
    const {eventId} = req.params;
    if (!eventId) {
        return res
            .status(404)
            .json({
                "message": "Not found, eventId is required"
            });
    }
    Event
      .findById(eventId)
      .exec((err, event) => {
        if (!event) {
          return res
            .status(404)
            .json({"message": "event not found"});
        } else if (err) {
          return res
            .status(404)
            .json(err);
        } else {
          return res
            .status(200)
            .json(event);
        }
      });
}

const updateEvent = (req, res) => {
    const {eventId} = req.params;
    if (!eventId) {
        return res
            .status(404)
            .json({
                "message": "Not found, eventId is required"
            });
    }

    Event
        .findById(eventId)
        .exec((err, event) => {
            if (!event) {
                return res
                .json(404)
                .status({
                    "message": "event not found"
                });
            } else if (err) {
                return res
                .status(400)
                .json(err);
            }
            const {name, address, date, members} = req.body;
            event.name = name;
            event.address = address;
            event.date = date;
            event.setMembers(members);

            event.save((err) => {
                if (err) {
                    res
                    .status(400)
                    .json(err);
                } else {
                    res
                    .status(200)
                    .json({event});
                }
            });
        });

}

const deleteEvent = (req, res) => {
    const {eventId} = req.params;
    if (eventId) {
        Event
            .findByIdAndRemove(eventId)
            .exec((err, event) => {
                if (err) {
                    return res
                    .status(404)
                    .json(err);
                }
                res
                    .status(204)
                    .json(null);
            }
        );
    } else {
        res
        .status(404)
        .json({
            "message": "No event"
        });
    }
}

module.exports = {
    getEventsList,
    createEvent,
    getEventById,
    updateEvent,
    deleteEvent
}
