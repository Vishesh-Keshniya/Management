const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { Project, Client, Contact, Subscriber } = require('./models/data'); 
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vishesh:test@management.razyrop.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));



app.post('/contact', async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    if (!fullName || !email || !mobile || !city) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newContact = new Contact({ fullName, email, mobile, city });
    await newContact.save();

    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



app.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});





app.post('/projects', async (req, res) => {
  try {
    const { image, name, description } = req.body;
    const newProject = new Project({ image, name, description });
    await newProject.save();
    res.status(201).json({ message: 'Project added successfully' });
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/clients', async (req, res) => {
  try {
    const { image, name, description, designation } = req.body;
    const newClient = new Client({ image, name, description, designation });
    await newClient.save();
    res.status(201).json({ message: 'Client added successfully' });
  } catch (error) {
    console.error('Error adding client:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ message: 'Server error' });
  }
});




app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.get('/clients', async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    console.error('Error fetching clients:', err);
    res.status(500).json({ message: 'Server error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
