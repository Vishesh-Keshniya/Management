const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);


const clientSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  designation: { type: String, required: true }
}, { timestamps: true });

const Client = mongoose.model('Client', clientSchema);


const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  city: { type: String, required: true }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);


const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
}, { timestamps: true });

const Subscriber = mongoose.model('Subscriber', subscriberSchema);


module.exports = {
  Project,
  Client,
  Contact,
  Subscriber
};
