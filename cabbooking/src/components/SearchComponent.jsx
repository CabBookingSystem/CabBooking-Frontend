import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function HomePage() {
  const navigate = useNavigate()

  const onLogin = async () => {
    navigate('/login')
  }

  return (
    <div>
      {/* Hero Section */}
      <header style={styles.hero}>
        <div className="container py-5">
          <h1 className="text-center text-white mb-4" style={styles.heroTitle}>Cab Booking Made Easy</h1>
          <p className="text-center text-white mb-5">Book a cab in seconds with just a few clicks</p>
          
          {/* Search Form */}
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card p-4 shadow-lg" style={styles.card}>
                <div className="card-body">
                  {/* Source Dropdown */}
                  <div className="mb-3">
                    <label htmlFor="source" className="form-label text-dark">Source</label>
                    <select id="source" className="form-select">
                      <option value="">Select Source</option>
                      <option value="city1">RK Nagar</option>
                      <option value="city2">Wakad</option>
                      <option value="city3">Hinjewadi Phase 3</option>
                    </select>
                  </div>

                  {/* Destination Dropdown */}
                  <div className="mb-3">
                    <label htmlFor="destination" className="form-label text-dark">Destination</label>
                    <select id="destination" className="form-select">
                      <option value="">Select Destination</option>
                      <option value="city1">Nigdi</option>
                      <option value="city2">Baner</option>
                      <option value="city3">Karve Nagar</option>
                    </select>
                  </div>

                  {/* Search Button */}
                  <button className="btn btn-teal w-100" onClick={onLogin}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div className="container">
          <h2 className="text-center mb-4" style={styles.sectionTitle}>Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="feature-box">
                <h4 style={styles.featureTitle}>Reliable Rides</h4>
                <p>Our cabs are always available when you need them, ensuring on-time arrivals and departures.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-box">
                <h4 style={styles.featureTitle}>Affordable Pricing</h4>
                <p>Book a ride at reasonable rates, with no hidden fees or charges.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-box">
                <h4 style={styles.featureTitle}>24/7 Support</h4>
                <p>Get assistance any time of the day with our dedicated customer support team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={styles.pricingSection}>
        <div className="container">
          <h2 className="text-center text-white mb-4">Our Pricing</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="pricing-box">
                <h4 style={styles.pricingTitle}>Basic</h4>
                <p>$10 for 10 km</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="pricing-box">
                <h4 style={styles.pricingTitle}>Standard</h4>
                <p>$20 for 20 km</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="pricing-box">
                <h4 style={styles.pricingTitle}>Premium</h4>
                <p>$30 for 30 km</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialsSection}>
        <div className="container">
          <h2 className="text-center text-white mb-4">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-box">
                <p>"The best cab service I've used! Reliable, affordable, and always on time."</p>
                <h5>John Doe</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-box">
                <p>"A smooth and comfortable ride every time. Highly recommended!"</p>
                <h5>Jane Smith</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-box">
                <p>"Fantastic service! I can always count on them for a quick ride."</p>
                <h5>Michael Brown</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div className="container text-center">
          <p className="text-white">© 2025 Cab Booking, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

// Styles for the UI components
const styles = {
  hero: {
    backgroundImage: 'url("https://via.placeholder.com/1500x1000/008080/FFFFFF?text=Background+Image")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  featuresSection: {
    padding: '50px 0',
    backgroundColor: '#f4f4f4',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#008080',
  },
  featureTitle: {
    fontSize: '24px',
    color: '#008080',
  },
  pricingSection: {
    padding: '50px 0',
    backgroundColor: '#333',
  },
  pricingBox: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  pricingTitle: {
    color: '#FFD700',  // Gold color for pricing titles
    fontSize: '24px',
    fontWeight: 'bold',
  },
  testimonialsSection: {
    padding: '50px 0',
    backgroundColor: '#f4f4f4',
  },
  testimonialBox: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    padding: '20px 0',
    backgroundColor: '#008080',
  }
}

export default HomePage;
