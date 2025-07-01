import React, { useEffect, useState } from 'react';
import './HappyClients.css';

const HappyClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://management-4.onrender.com/clients')
      .then(res => res.json())
      .then(data => {
        setClients(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching clients:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="happy-clients">
      <h2>Happy Clients</h2>
      {loading ? (
        <p>Loading clients...</p>
      ) : clients.length === 0 ? (
        <h1 className="no-clients-message" style={{color: "red"}}>No clients found. Add some from the admin panel.</h1>
      ) : (
        <div className="client-list">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <img src={client.image} alt={client.name} className="client-img" />
              <p className="client-text">{client.description}</p>
              <h4 className="client-name">{client.name}</h4>
              <p className="client-role">{client.designation}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HappyClients;
