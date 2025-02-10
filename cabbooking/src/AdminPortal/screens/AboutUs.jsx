import React from 'react';
import './AboutUs.css'; // import external CSS file for styling
import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    <div>
  
    <div className="about-us">
      {/* Header Section */}
      <div className="header">
        <h1>Welcome to Our Cab Booking Service</h1>
      </div>

      {/* Content Section */}
      <div className="section">
        <h2>About Us</h2>
        <p>
          We are a premier cab booking service offering fast, reliable, and affordable transportation. Our mission is to provide our customers with the best possible experience while traveling, ensuring safety and comfort every step of the way.
        </p>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <h3>Fast & Reliable</h3>
          <p>Get a cab in minutes with our instant booking service, available 24/7.</p>
        </div>
        <div className="feature-card">
          <h3>Affordable Pricing</h3>
          <p>Enjoy competitive pricing with no hidden fees and transparent charges.</p>
        </div>
        <div className="feature-card">
          <h3>Safe Rides</h3>
          <p>Your safety is our priority, with vetted drivers and real-time tracking.</p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <p>&copy; 2025 Cab Booking Service. All Rights Reserved.</p>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
