import React, { useState } from 'react';
import './FooterSection.css';

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const res = await fetch('https://management-4.onrender.com/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Subscribed successfully!');
        setEmail('');
      } else {
        setMessage(data.message || 'Subscription failed');
      }
    } catch (err) {
      setMessage('Server error');
      console.error(err);
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-banner">
        <h2>
          Learn more about our listing process, as well as our
          <br />
          additional staging and design work.
        </h2>
        <button className="learn-more-btn">LEARN MORE</button>
      </div>

      <div className="footer-middle">
        <ul className="footer-links">
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>

        <div className="newsletter">
          <span>Subscribe Us</span>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
          {message && <p style={{ color: 'white' }}>{message}</p>}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">All Rights Reserved 2023</div>
        <img className="logofooter" src="/logo.svg" alt="" />
        <div className="social-icons">
          <img src="/twitter.svg" alt="Twitter" />
          <img src="/insta.svg" alt="Instagram" />
          <img src="/fb.svg" alt="Facebook" />
          <img src="/li.svg" alt="LinkedIn" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
