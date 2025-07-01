import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import './AdminPanel.css';


const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
const navigate = useNavigate();


function home()
{
  navigate('/home');
}
const handleProjectSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const newProject = {
    image: form.image.value,
    name: form.name.value,
    description: form.description.value
  };

  try {
    const res = await fetch('https://management-4.onrender.com/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject)
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      setProjects([...projects, newProject]);
      form.reset();
    } else {
      alert(data.message || 'Failed to add project');
    }
  } catch (err) {
    console.error(err);
    alert('Server error');
  }
};

const handleClientSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const newClient = {
    image: form.image.value,
    name: form.name.value,
    description: form.description.value,
    designation: form.designation.value
  };

  try {
    const res = await fetch('https://management-4.onrender.com/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClient)
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      setClients([...clients, newClient]); 
      form.reset();
    } else {
      alert(data.message || 'Failed to add client');
    }
  } catch (err) {
    console.error(err);
    alert('Server error');
  }
};


 
 useEffect(() => {
  fetch('https://management-4.onrender.com/contacts')
    .then(res => res.json())
    .then(data => setContacts(data))
    .catch(err => console.error('Error fetching contacts:', err));

  fetch('https://management-4.onrender.com/subscribers')
    .then(res => res.json())
    .then(data => setSubscribers(data))
    .catch(err => console.error('Error fetching subscribers:', err));
}, []);


  return (
    <div className="admin-panel">
      <h1>ADMIN PANEL</h1>
 <button onClick={() => navigate('/')} className="admin-home-button">
    ← Back to Home
  </button>
      <section>
        <h2>Project Management</h2>
        <form onSubmit={handleProjectSubmit}>
          <input name="image" placeholder="Project Image URL" required />
          <input name="name" placeholder="Project Name" required />
          <textarea name="description" placeholder="Project Description" required />
          <button type="submit">Add Project</button>
        </form>
      
      </section>

      <section>
        <h2>Client Management</h2>
        <form onSubmit={handleClientSubmit}>
          <input name="image" placeholder="Client Image URL" required />
          <input name="name" placeholder="Client Name" required />
          <input name="designation" placeholder="Designation" required />
          <textarea name="description" placeholder="Client Description" required />
          <button type="submit">Add Client</button>
        </form>
       
      </section>

      <section>
        <h2>Contact Form Submissions</h2>
       <ul>
 {contacts.map((c) => (
  <li key={c._id}>
    <strong>Full Name:</strong> {c.fullName} {' '} <br />
    <strong>Email:</strong> {c.email} {' '} <br />
    <strong>Mobile:</strong> {c.mobile} {' '} <br />
    <strong>City:</strong> {c.city} 
  </li>
))}

</ul>

      </section>

      <section>
        <h2>Subscribed Email Addresses</h2>
      <ul>
  {subscribers.map((s, index) => (
    <li key={index}>{s.email}</li>
  ))}
</ul>

      </section>

       <button onClick={() => navigate('/')} className="admin-home-button">
    ← Back to Home
  </button>
    </div>
  );
};

export default AdminPanel;
