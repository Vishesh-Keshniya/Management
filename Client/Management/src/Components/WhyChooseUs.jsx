import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="section-heading">
        <h2>Why Choose Us?</h2>
          <div className="underline" />
      </div>

      <div className="features">
        <div className="feature-card">
          <img src="/home.svg" alt="ROI" />
          <h3>Potential ROI</h3>
          <p>
            Whether you're looking to buy a home or renovate your current home for sale, we’ll walk you through powerful return-for-value.
          </p>
        </div>
        <div className="feature-card">
          <img src="/brush.svg" alt="Design" />
          <h3>Design</h3>
          <p>
            Our designers and interior design teams guide you through space planning and renovation construction to streamline home upgrades.
          </p>
        </div>
        <div className="feature-card">
          <img src="/dollar.svg" alt="Marketing" />
          <h3>Marketing</h3>
          <p>
            Strategic marketing, content production, and modern digital plans accompany every listing in today’s market.
          </p>
        </div>
      </div>

      <div className="feature-images">
        <div className="image-box top-left">
          <img src="/11.svg" alt="Visual 1" />
          <div className="corner orange" />
        </div>
        <div className="image-box center">
          <img src="/22.svg" alt="Visual 2" />
          <div className="corner blue" />
        </div>
        <div className="image-box bottom-right">
          <img src="/33.svg" alt="Visual 3" />
          <div className="corner orange" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
