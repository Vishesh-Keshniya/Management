import React from 'react';
import './RealtorSection.css';

const RealtorSection = () => {
  return (
    <div className="realtor-section">
      <div className="blue-ball" />
      <div className="orange-ball" />

      <div className="realtor-text">
        <h2>Not Your Average Realtor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />  Amet
          consectetur nulla sapien nulla sed. Urna sed nec ullamcorper.
           Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Amet
          consectetur nulla sapien nulla sed. Urna sed nec ullamcorper.
        </p>
      </div>

      <div className="realtor-images">
        <div className="image image-main">
          <img src="/e1.svg" alt="Main Realtor" />
        </div>
        <div className="image image-top">
          <img src="/e2.svg" alt="Top Realtor" />
        </div>
        <div className="image image-bottom">
          <img src="/e3.svg" alt="Bottom Realtor" />
        </div>
      </div>
    </div>
  );
};

export default RealtorSection;
