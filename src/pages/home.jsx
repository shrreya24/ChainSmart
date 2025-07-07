import React, { useState, useEffect } from 'react';
import { FaBoxOpen, FaShippingFast, FaRecycle, FaChartBar } from "react-icons/fa";
import './Home.css';

const Home = () => {
  // Testimonial slider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      text: "ChainSmart transformed our inventory management—saving costs and reducing waste!",
      author: "GroMart"
    },
    {
      text: "The optimized delivery feature helped us cut fuel costs by 30%!",
      author: "FastShip Logistics"
    },
    {
      text: "Our customers love the reusable packaging system. It's reduced our packaging costs by 40%!",
      author: "EcoGoods"
    }
  ];

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="home-container">
      <header>
        <div className="logo">
          <span className="logo-icon">⛓️</span>
          <strong>ChainSmart</strong>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Inventory</a>
          <a href="#">Deliveries</a>
          <a href="#">Packaging</a>
          <a href="#">Dashboard</a>
          <a href="#">Sustainability</a>
          <a href="#">Reports</a>
          <a href="#" className="login-btn">Login</a>
        </nav>
      </header>

      <section className="video-section">
        <video autoPlay muted loop>
          <source src="/aa.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1></h1>
          <p></p>
         
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="icon-container">
            <FaBoxOpen className="feature-icon" />
          </div>
          <h3>AI Inventory</h3>
          <p>Predict demand and reduce waste smartly.</p>
        </div>
        <div className="feature-card">
          <div className="icon-container">
            <FaShippingFast className="feature-icon" />
          </div>
          <h3>Optimized Delivery</h3>
          <p>Faster, greener last-mile logistics.</p>
        </div>
        <div className="feature-card">
          <div className="icon-container">
            <FaRecycle className="feature-icon" />
          </div>
          <h3>Reusable Packaging</h3>
          <p>Eco-friendly packaging and returns.</p>
        </div>
        <div className="feature-card">
          <div className="icon-container">
            <FaChartBar className="feature-icon" />
          </div>
          <h3>ESG Insights</h3>
          <p>Track your sustainability performance.</p>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonial-container">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <p>"{testimonials[currentTestimonial].text}"</p>
              <div className="testimonial-author">— {testimonials[currentTestimonial].author}</div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Transform Your Supply Chain?</h2>
        <button className="demo-btn">Request Demo</button>
      </section>

      <footer>
        <p>&copy; 2025 ChainSmart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;