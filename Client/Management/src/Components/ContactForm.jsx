import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://management-4.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        alert('Contact saved successfully');
        setFormData({ fullName: '', email: '', mobile: '', city: '' });
      } else {
        alert(data.message || 'Submission failed');
      }
    } catch (error) {
      alert('Error submitting form');
      console.error(error);
    }
  };

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${"/contactbanner.svg"})` }}>
      <div className="overlay">
        <div className="hero-text">
          <h1>Consultation,<br />Design,<br />& Marketing</h1>
        </div>
        <div className="form-card">
          <h2>Get a Free Consultation</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Enter Email Address" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
            <input type="text" name="city" placeholder="Area, City" value={formData.city} onChange={handleChange} required />
            <button type="submit">Get Quick Quote</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
