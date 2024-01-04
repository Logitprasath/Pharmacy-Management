// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the external CSS file for styling

const Home = () => {
  const footerStyle = {
    backgroundColor: '#2c3e50', // Set your desired background color
    color: '#ecf0f1', // Set your desired text color
    textAlign: 'center',
    padding: '20px',
    marginTop: '30px',
  };
  return (
    <div>
      {/* Main content */}
      <div className="home-container">
        <section className="header-section">
          <h1>Welcome to Our Pharmacy!</h1>
          <p>Your trusted source for high-quality medications, healthcare products, and professional pharmacy services.</p>
          <Link to="/main" className="explore-link">Explore Our Products</Link>
        </section>

        <section className="reasons-section">
          <h2>Why Choose Us?</h2>
          <p>
            At Our Pharmacy, we prioritize your health and well-being. Here are some reasons to choose us:
          </p>
          <ul>
            <li>Wide range of high-quality medications</li>
            <li>Friendly and knowledgeable staff</li>
            <li>Convenient online services</li>
            {/* Add more reasons as needed */}
          </ul>
        </section>

        <section className="services-section">
          <h2>Our Services</h2>
          <p>We offer a variety of services to meet your healthcare needs:</p>
          <ul>
            <li>Prescription filling</li>
            <li>Over-the-counter products</li>
            <li>Health consultations</li>
            {/* Add more services as needed */}
          </ul>
          <Link to="/about" className="learn-more-link">Learn More About Our Services</Link>
        </section>
      </div>

      {/* Footer with inline styles */}
      <div style={footerStyle}>
        <section>
          <h2>Contact Us</h2>
          <p>Have questions or need assistance? Contact us today!</p>
          <p>Email: <a href="mailto:info@yourpharmacy.com">727822tucy028@skct.edu.in</a></p>
          <p>Phone:1234567890</p>
        </section>
        <p>&copy; 2023  Pharmacy Management .</p>
      </div>
    </div>
  );
};

export default Home;
