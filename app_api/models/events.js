const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

const eventSchema = new mongoose.Schema({
    author: memberSchema,
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        'default': Date.now
    },
    date: {
        type: Date,
        'default': Date.now
    },
    members: [memberSchema]
});

eventSchema.methods.setAuthor = function (author) {
    this.author = {};
    this.author.name = author.name;
    this.author.id = author.id;
};

eventSchema.methods.setMembers = function (members) {
    this.members = [];
    members.forEach(member => {
        let newMember = {
            name: member.name,
            id: member.id
        };
        this.members.push(newMember);
    });    
};

mongoose.model('Event', eventSchema);