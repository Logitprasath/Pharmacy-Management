import React from 'react';
import './About.css'; // Import the external CSS file

const About = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-heading">About Us</h2>
      <p className="about-us-content">
        Welcome to Your Pharmacy, your trusted source for high-quality
          medications and healthcare products. With a commitment to customer
          satisfaction, we strive to provide the best pharmaceutical services
          tailored to your needs.
      </p>
      <p className="about-us-content">
          Our experienced team of pharmacists is dedicated to ensuring your
          well-being. We offer a wide range of prescription medications, over
          the counter products, and health essentials. Whether you have
          questions about your medications or need advice on managing your
          health, we are here to help.
      </p>
      <div className="about-us-content">
        <p>
          At Your Pharmacy, we prioritize your health and convenience. Visit our
          store today or explore our online services for a seamless pharmacy
          experience.
        </p>
      </div>
    </div>
  );
};

export default About;
