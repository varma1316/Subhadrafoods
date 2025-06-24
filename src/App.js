import './App.css';

// Food/Brand Icon Component
function FoodIcon({ size = 32, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#FF6B6B" stroke="#E74C3C" strokeWidth="2"/>
      <path d="M12 12h8v8h-8z" fill="#FFF"/>
      <circle cx="14" cy="14" r="1" fill="#E74C3C"/>
      <circle cx="18" cy="14" r="1" fill="#E74C3C"/>
      <circle cx="14" cy="18" r="1" fill="#E74C3C"/>
      <circle cx="18" cy="18" r="1" fill="#E74C3C"/>
    </svg>
  );
}

// Collection/Products Icon Component
function CollectionIcon({ size = 32, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="6" height="6" rx="1" fill="#FFD93D" stroke="#F6C90E" strokeWidth="1"/>
      <rect x="13" y="8" width="6" height="6" rx="1" fill="#6BCF7F" stroke="#4CAF50" strokeWidth="1"/>
      <rect x="22" y="8" width="6" height="6" rx="1" fill="#4D96FF" stroke="#2196F3" strokeWidth="1"/>
      <rect x="4" y="18" width="6" height="6" rx="1" fill="#FF9F43" stroke="#FF8F00" strokeWidth="1"/>
      <rect x="13" y="18" width="6" height="6" rx="1" fill="#A8E6CF" stroke="#4CAF50" strokeWidth="1"/>
      <rect x="22" y="18" width="6" height="6" rx="1" fill="#FF6B9D" stroke="#E91E63" strokeWidth="1"/>
    </svg>
  );
}

// Subscription Icon Component
function SubscriptionIcon({ size = 32, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" fill="#4ECDC4" stroke="#26A69A" strokeWidth="2"/>
      <path d="M12 16l3 3 5-5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12h4v4h-4z" fill="#26A69A"/>
      <path d="M20 12h4v4h-4z" fill="#26A69A"/>
    </svg>
  );
}

// Benefits Icon Component
function BenefitsIcon({ size = 32, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" fill="#FFE66D" stroke="#FFC107" strokeWidth="2"/>
      <path d="M12 16l2 2 6-6" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="10" r="2" fill="#FF9800"/>
      <circle cx="22" cy="16" r="2" fill="#FF9800"/>
      <circle cx="16" cy="22" r="2" fill="#FF9800"/>
      <circle cx="10" cy="16" r="2" fill="#FF9800"/>
    </svg>
  );
}

// Target Audience Icon Component
function TargetIcon({ size = 32, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" fill="#9C27B0" stroke="#7B1FA2" strokeWidth="2"/>
      <circle cx="12" cy="14" r="2" fill="#FFF"/>
      <circle cx="20" cy="14" r="2" fill="#FFF"/>
      <path d="M12 20c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 10h12v2h-12z" fill="#7B1FA2"/>
    </svg>
  );
}

// Contact Icon Component
function ContactIcon({ size = 32, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" fill="#607D8B" stroke="#455A64" strokeWidth="2"/>
      <path d="M8 12h16v8h-16z" fill="#FFF"/>
      <path d="M8 12l8 6 8-6" fill="#FFF"/>
      <circle cx="12" cy="16" r="1" fill="#455A64"/>
      <circle cx="20" cy="16" r="1" fill="#455A64"/>
    </svg>
  );
}

// Explore Icon Component
function ExploreIcon({ size = 32, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" fill="#4CAF50" stroke="#388E3C" strokeWidth="2"/>
      <path d="M12 16l3 3 5-5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 8v8l6-4z" fill="#FFF"/>
    </svg>
  );
}

// Product Placeholder Icon Component
function ProductPlaceholderIcon({ size = 32, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="24" height="16" rx="2" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="2"/>
      <circle cx="16" cy="16" r="4" fill="#E0E0E0"/>
      <path d="M12 12h8v8h-8z" fill="#E0E0E0"/>
    </svg>
  );
}

function App() {
  const handleWhatsAppClick = (productName = '') => {
    const message = productName 
      ? `Hi! I'm interested in buying ${productName}. Can you please provide more details?`
      : 'Hi! I\'m interested in your laddus. Can you please provide more details?';
    const whatsappUrl = `https://wa.me/919945049567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    {
      id: 1,
      name: "Shuddh Dryfruit Delight",
      tags: "(No Sugar | No Jaggery | High Energy)",
      description: "A royal blend of almonds, cashews, pistachios, pumpkin seeds, watermelon seeds, and dates—all bound together with pure desi cow ghee.",
      highlight: "👉 Naturally sweetened, rich in nutrients, and perfect for guilt-free snacking.",
      image: "/images/products/shuddh-dryfruit.jpg",
      price: 100
    },
    {
      id: 2,
      name: "Flax Power Laddu",
      tags: "(Immunity Boost | Omega-3 Rich | Jaggery Sweetened)",
      description: "A soft and nourishing laddu packed with cashews, almonds, pumpkin seeds, and flaxseeds, this laddu supports heart and digestive health.",
      highlight: "👉 Sweetened with jaggery and blended with tradition for a superfood twist.",
      image: "/images/products/flax-power1.jpg",
      price: 100
    },
    {
      id: 3,
      name: "Makhana Peanut Laddu",
      tags: "(High Protein | Light Yet Filling | Jaggery Sweetened)",
      description: "A unique fusion of roasted peanuts, popped makhana (foxnuts), and golden jaggery—delivering a protein-rich, energy-boosting snack.",
      highlight: "👉 Soft, delicious, and ideal for snacking anytime—no crunch, just melt-in-mouth goodness.",
      image: "/images/products/makhana-peanut.jpg",
      price: 100
    },
    {
      id: 4,
      name: "Urad Shakti Laddu",
      tags: "(Bone Strength | Digestive Health | Desi Ghee Rich)",
      description: "This traditional urad dal laddu is made with pure cow ghee and jaggery—a nourishing snack packed with strength and heritage.",
      highlight: "👉 A heritage recipe for growing children and aging adults alike.",
      image: "/images/products/urad-shakti.jpg",
      price: 100
    },
    {
      id: 5,
      name: "Anjeer Bliss Balls",
      tags: "(No Sugar | No Jaggery | Naturally Sweet)",
      description: "Laden with chopped figs (anjeer) and premium dry fruits, these laddus are naturally sweet, chewy, and rich in fiber and iron.",
      highlight: "👉 A naturally sweet and iron-rich treat, perfect for daily nutrition.",
      image: "/images/products/anjeer-bliss.png",
      price: 100
    },
    {
      id: 6,
      name: "Til Power Laddu",
      tags: "(Soft | Iron & Calcium Rich)",
      description: "A soft, melt-in-the-mouth laddu made with slow-roasted sesame seeds and naturally sweet jaggery.",
      highlight: "👉 Rich in iron, calcium, and warmth—an ideal winter treat for daily nourishment.",
      image: "/images/products/Till-power.jpg",
      price: 100
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <img src="/images/logo.jpg" alt="Subhadra Foods Logo" className="logo-image" />
            <div className="brand-text">
              <h1 className="brand">Subhadra Foods</h1>
              <p className="tagline">FOL – Flavours of Laddus</p>
              <p className="subtitle">Pure. Wholesome. Rooted in Tradition.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title"><FoodIcon size={32} style={{verticalAlign:'middle',marginRight:8}} />Presenting Our Signature Laddus</h2>
            <p className="hero-description">Discover the authentic taste of traditional Indian laddus, made with pure ingredients and love.</p>
            <div className="hero-cta">
              <button 
                className="cta-btn primary"
                onClick={() => document.querySelector('.products').scrollIntoView({ behavior: 'smooth' })}
              >
                <ExploreIcon size={22} style={{verticalAlign:'middle',marginRight:8}} />Explore Our Laddus
              </button>
              <button 
                className="cta-btn secondary"
                onClick={() => handleWhatsAppClick()}
              >
                📱 Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <div className="container">
          <h2 className="section-title"><CollectionIcon size={28} style={{verticalAlign:'middle',marginRight:8}} />Our Signature Collection</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="product-image-placeholder">
                    <ProductPlaceholderIcon size={48} />
                  </div>
                </div>
                <h3 className="product-title">{product.id}. {product.name}</h3>
                <div className="product-price">
                  ₹{product.price} <span className="weight">250gm</span>
                </div>
                <p className="product-tags">{product.tags}</p>
                <p className="product-description">{product.description}</p>
                <p className="product-highlight">{product.highlight}</p>
                <button 
                  className="whatsapp-btn"
                  onClick={() => handleWhatsAppClick(product.name)}
                >
                  📱 Buy on WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="subscription">
        <div className="container">
          <h2 className="section-title"><SubscriptionIcon size={28} style={{verticalAlign:'middle',marginRight:8}} />Subscription Plan</h2>
          <p className="subscription-subtitle">Fresh Laddus Delivered Weekly – Just the Way You Like It!</p>
          
          <div className="subscription-content">
            <div className="subscription-info">
              <h3>🧁 What's the Plan?</h3>
              <p>Subscribe to 1 kg per month, and we'll deliver</p>
              <p>👉 250 grams of fresh laddus every week – right to your doorstep!</p>
              <p>🌀 Choose "Assorted" for a weekly surprise – a new variety every delivery!</p>
              
              <h4>💰 Pricing Example: (Customizable)</h4>
              <ul>
                <li>₹XXX for 1kg/month (250g x 4 deliveries)</li>
                <li>Free delivery in local areas</li>
                <li>Cancel any time after the first month</li>
              </ul>
            </div>
            
            <div className="subscription-cta">
              <button 
                className="whatsapp-btn large"
                onClick={() => handleWhatsAppClick('Subscription Plan')}
              >
                📱 Subscribe on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title"><BenefitsIcon size={28} style={{verticalAlign:'middle',marginRight:8}} />Why Choose Our Subscription?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <p>Freshly Made Every Week – No stockpiling, just fresh goodness</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <p>Assorted Varieties – Enjoy a new flavour every week from our FOL collection</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <p>Kid-Friendly & Senior-Friendly – Soft, nutritious, and easy to digest</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <p>No Preservatives, No Refined Sugar – Just natural sweetness and nourishment</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <p>Energy-Rich, Immunity-Boosting Snacks – Ideal for lunchboxes, tea-time, or evening hunger pangs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="ideal-for">
        <div className="container">
          <h2 className="section-title"><TargetIcon size={28} style={{verticalAlign:'middle',marginRight:8}} />Ideal For</h2>
          <div className="ideal-grid">
            <div className="ideal-item">
              <span className="ideal-icon">👶</span>
              <h4>Kids</h4>
              <p>Healthy school or evening snacks</p>
            </div>
            <div className="ideal-item">
              <span className="ideal-icon">👵</span>
              <h4>Seniors</h4>
              <p>Soft, nourishing & digestion-friendly</p>
            </div>
            <div className="ideal-item">
              <span className="ideal-icon">👨‍👩‍👧‍👦</span>
              <h4>Busy Families</h4>
              <p>No prep, just unwrap & enjoy</p>
            </div>
            <div className="ideal-item">
              <span className="ideal-icon">💼</span>
              <h4>Working Professionals</h4>
              <p>Guilt-free desk-time indulgence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <div className="container">
          <h2 className="section-title">Customer Reviews</h2>
          <div className="review-grid">
            <div className="review-image-placeholder">Image 1</div>
            <div className="review-image-placeholder">Image 2</div>
            <div className="review-image-placeholder">Image 3</div>
            <div className="review-image-placeholder">Image 4</div>
            <div className="review-image-placeholder">Image 5</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title"><ContactIcon size={28} style={{verticalAlign:'middle',marginRight:8}} />Contact Us</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <p><strong>Call/WhatsApp:</strong> <a href="tel:9945049567">9945049567</a></p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🌐</span>
              <p><strong>Order Online:</strong> <a href="http://www.subhadrafoods.com" target="_blank" rel="noopener noreferrer">www.subhadrafoods.com</a></p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <p><strong>Currently delivering in:</strong> Bangalore</p>
            </div>
          </div>
          
          <div className="contact-cta">
            <button 
              className="whatsapp-btn large"
              onClick={() => handleWhatsAppClick()}
            >
              📱 Contact on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Subhadra Foods - FOL (Flavours of Laddus). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
