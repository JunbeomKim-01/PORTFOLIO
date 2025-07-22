import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Simple fade-in on scroll for sections
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(section);
    });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <header className="main-header">
        <nav className="container">
          <h1 className="site-title">YuMin-Ahn</h1>
          <ul className="main-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>YuMin-Ahn</h2>
          <p>Elegance Redefined. Craftsmanship Unveiled.</p>
          <a href="#collections" className="btn-view-collections">View Collections</a>
        </div>
      </section>

      <section id="collections" className="collections-section">
        <h2 className="section-title">Our Collections</h2>
        <div className="container collection-grid">
          <div className="collection-item">
            <img src="https://images.unsplash.com/photo-1581044777550-4cfa607037dc?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=1200&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3" alt="Spring/Summer 2025" />
            <h3>Spring/Summer 2025</h3>
            <p>A collection inspired by the ethereal beauty of nature and modern architecture.</p>
          </div>
          <div className="collection-item">
            <img src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=1200&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3" alt="Autumn/Winter 2024" />
            <h3>Autumn/Winter 2024</h3>
            <p>Bold silhouettes and rich textures, a tribute to timeless sophistication.</p>
          </div>
          <div className="collection-item">
            <img src="https://images.unsplash.com/photo-1529626465617-b718a01780dc?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=1200&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3" alt="Bridal Couture" />
            <h3>Bridal Couture</h3>
            <p>Exquisite designs for the modern bride, blending tradition with contemporary flair.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container content-wrapper">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e3?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=1200&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3" alt="About YuMin-Ahn" />
          </div>
          <div className="about-content">
            <h2 className="section-title">About YuMin-Ahn</h2>
            <p>YuMin-Ahn is a visionary fashion designer known for her innovative approach to classic silhouettes and her meticulous attention to detail. With a background in fine arts and haute couture, YuMin-Ahn's designs blend artistic expression with wearable elegance.</p>
            <p>Her philosophy centers on creating pieces that empower the wearer, celebrating individuality and timeless style. Each collection is a narrative, meticulously crafted to evoke emotion and inspire confidence.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <div className="container">
          <p>For collaborations, inquiries, or to schedule a private viewing, please feel free to contact us.</p>
          <div className="contact-links">
            <a href="mailto:contact@yuminahn.com">Email</a>
            <a href="https://www.instagram.com/yuminahn_official" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://dribbble.com/yuminahn" target="_blank" rel="noopener noreferrer">Dribbble</a>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <p>&copy; 2025 YuMin-Ahn. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;