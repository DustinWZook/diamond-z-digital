import { useEffect, useState } from "react";
import {
  Monitor,
  Wrench,
  MapPin,
  Rocket,
  BarChart3,
  Phone,
  Mail,
  CheckCircle,
  ShieldCheck,
  Clock,
  BadgeDollarSign,
  MessageCircle,
  Gem,
  Menu,
  X,
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

export default function App() {

  const [showTopBar, setShowTopBar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY < 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const services = [
    {
      icon: Monitor,
      title: "Website Design",
      text: "Clean, mobile-friendly websites for small businesses, side hustles, and local services.",
    },
    {
      icon: Wrench,
      title: "Website Updates & Fixes",
      text: "Need new photos, updated hours, better layout, or a contact form? I can help.",
    },
    {
      icon: Rocket,
      title: "Landing Pages",
      text: "Perfect for promoting one service, event, product, or special offer.",
    },
    {
      icon: BarChart3,
      title: "Basic SEO Setup",
      text: "Help your website show up better with improved titles, descriptions, keywords, and local search basics.",
    },
  ];

  const pricing = [
    {
      icon: Wrench,
      title: "Quick Website Fixes",
      price: "$75",
      note: "Starting at",
      text: "Up to 3 small updates such as text changes, photo swaps, hours/contact info updates, or broken link fixes.",
    },
    {
      icon: Monitor,
      title: "One-Page Website",
      price: "$300",
      note: "Starting at",
      text: "A simple mobile-friendly page for your business, service, or promotion with contact info and a clear call to action.",
    },
    {
      icon: Monitor,
      title: "Full One-Page Business Website",
      price: "$750",
      note: "Starting at",
      text: "A more built-out one-page business website with additional sections, stronger layout, and more polished design.",
    },
    {
      icon: CheckCircle,
      title: "Add-ons & Multi-Page Sites",
      price: "Custom Quote",
      note: "Available",
      text: "Forms, extra pages, SEO, updates, and more available as add-ons or custom projects.",
    },
  ];

  const carePlans = [
    {
      name: "Basic Care",
      price: "$49",
      subtitle: "Best for simple one-page websites.",
      items: [
        "Hosting management",
        "Monthly website checkup",
        "Basic backup check",
        "Contact form test",
        "Up to 1 small website change per month",
      ],
    },
    {
      name: "Standard Care",
      price: "$99",
      subtitle: "Best for most small businesses.",
      items: [
        "Hosting management",
        "Monthly backups",
        "Security/plugin updates, if needed",
        "Basic SEO check",
        "Contact form test",
        "Up to 3 small website changes per month",
      ],
    },
    {
      name: "Premium Care",
      price: "$149",
      subtitle: "Best for active or growing businesses.",
      items: [
        "Everything in Standard",
        "Up to 5 small website changes per month",
        "Priority support",
        "Monthly website improvement suggestions",
        "Seasonal promotion update",
      ],
    },
  ];

  const benefits = [
    { icon: MapPin, title: "Local to Clarksville" },
    { icon: BadgeDollarSign, title: "Affordable pricing" },
    { icon: Clock, title: "Fast turnaround" },
    { icon: ShieldCheck, title: "Veteran-owned" },
    { icon: MessageCircle, title: "Simple, honest communication" },
    { icon: CheckCircle, title: "No confusing tech talk" },
  ];

  return (
      <>
        <style>{css}</style>
        <main className="site-shell">

          <header className={`top-bar ${showTopBar ? "top-bar-visible" : "top-bar-hidden"}`}>
            <a className="brand" href="#home" aria-label="Diamond Z Digital home">
              <img src="/logo-full.png" alt="Diamond Z Digital" className="brand-logo" />
            </a>

            <button
                className="mobile-menu-button"
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <nav className="nav-links" aria-label="Main navigation">
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#care">Care Plans</a>
              <a href="#contact">Contact</a>
            </nav>

            <nav
                className={`mobile-nav ${mobileMenuOpen ? "mobile-nav-open" : ""}`}
                aria-label="Mobile navigation"
            >
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#care" onClick={() => setMobileMenuOpen(false)}>Care Plans</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
          </header>

          <section id="home" className="hero-section">
            <div className="hero-copy">
              <p className="eyebrow">Websites & Digital Help for Local Businesses</p>
              <h1>Need a better website, a fresh update, or help getting found online?</h1>
              <p className="hero-text">
                Diamond Z Digital helps small businesses build a stronger online presence without overcomplicating things.
              </p>

              <div className="hero-actions">
                <a href="mailto:diamondzdigitalservices@gmail.com" className="primary-btn">Get a Quote</a>
                <a href="tel:2544624110" className="secondary-btn">Call Now</a>
              </div>
            </div>

            <div className="hero-card" aria-label="Business website preview">
              <div className="browser-frame">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mock-page">
                  <p className="mock-small">LOCAL BUSINESS.</p>
                  <h2>Strong Community.<br />Better Together.</h2>
                  <p>We help local businesses grow online.</p>
                  <button>Get Started</button>
                  <div className="mock-icons">
                    <div><Monitor size={24} /><span>Web Design</span></div>
                    <div><MapPin size={24} /><span>Local SEO</span></div>
                    <div><Wrench size={24} /><span>Updates</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="two-column-section">
            <div className="panel services-panel">
              <div className="section-tab">Services</div>
              <div className="service-list">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                      <article className="service-row" key={service.title}>
                        <div className="circle-icon"><Icon size={34} /></div>
                        <div>
                          <h3>{service.title}</h3>
                          <p>{service.text}</p>
                        </div>
                      </article>
                  );
                })}
              </div>
            </div>

            <div id="pricing" className="panel pricing-panel">
              <div className="panel-header">
                <Gem size={34} />
                <h2>Affordable Local Pricing</h2>
              </div>
              <div className="pricing-list">
                {pricing.map((item) => {
                  const Icon = item.icon;
                  return (
                      <article className="pricing-row" key={item.title}>
                        <div className="price-icon"><Icon size={30} /></div>
                        <div className="price-copy">
                          <h3>{item.title}</h3>
                          <p className="price-note">{item.note}</p>
                          <p>{item.text}</p>
                        </div>
                        <div className="price-value">{item.price}</div>
                      </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="why-strip" aria-label="Why work with Diamond Z Digital">
            <div className="why-title">Why Work With Diamond Z Digital?</div>
            <div className="why-items">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                    <div className="why-item" key={benefit.title}>
                      <Icon size={30} />
                      <span>{benefit.title}</span>
                    </div>
                );
              })}
            </div>
          </section>

          <section id="care" className="care-section">
            <div className="section-heading">
              <p>Monthly Website Care Plans</p>
              <h2>Keep Your Website Working For You</h2>
              <span>Keep your website updated, protected, and easy to restore if something goes wrong.</span>
            </div>

            <div className="care-grid">
              {carePlans.map((plan, index) => (
                  <article className="care-card" key={plan.name}>
                    <div className="care-card-title">{String.fromCharCode(65 + index)}. {plan.name}</div>
                    <div className="care-price"><span>{plan.price}</span>/month</div>
                    <p className="care-subtitle">{plan.subtitle}</p>
                    <ul>
                      {plan.items.map((item) => (
                          <li key={item}><CheckCircle size={18} />{item}</li>
                      ))}
                    </ul>
                  </article>
              ))}
            </div>
          </section>

          <section className="blue-callout">
            <div className="diamond-line left" />
            <img src="/logo-diamond.png" alt="Diamond Z Digital icon" className="callout-icon" />
            <div>
              <h2>Let’s Get Your Business Online</h2>
              <p>Websites. Updates. Digital Solutions.</p>
            </div>
            <div className="diamond-line right" />
          </section>

          <footer id="contact" className="footer-bar">
            <div className="footer-brand">
              <img src="/logo-diamond.png" alt="Diamond Z Digital icon" />
              <div>
                <p>Contact</p>
                <h2>Dustin Zook</h2>
              </div>
            </div>

            <a href="tel:2544624110" className="footer-link">
              <Phone size={26} />
              <span><small>Phone:</small>254-462-4110</span>
            </a>

            <a href="mailto:diamondzdigitalservices@gmail.com" className="footer-link">
              <Mail size={26} />
              <span><small>Email:</small>diamondzdigitalservices@gmail.com</span>
            </a>
          </footer>
        </main>
        <Analytics />
      </>
  );
}

const css = `
  :root {
  --navy: #0b1f36;
  --navy-2: #102a47;
  --blue: #1557a6;
  --blue-2: #2d74c4;
  --light-blue: #eef5ff;
  --line: #cbd5e1;
  --text: #111827;
  --muted: #4b5563;
  --white: #ffffff;
}

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--text);
    background: #f4f7fb;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .site-shell {
    min-height: 100vh;
    background: linear-gradient(135deg, #ffffff 0%, #ffffff 55%, #f1f5f9 100%);
  }

 .top-bar {
  position: fixed;
  top: 18px;
  left: 50%;
  right: auto;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 34px;
  width: min(1120px, calc(100% - 48px));
  padding: 12px 34px;
  background: rgba(255,255,255,0.96);
  border: 1px solid #dbe3ef;
  border-radius: 999px;
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(12px);
  min-height: 94px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.top-bar-visible {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

.top-bar-hidden {
  transform: translateX(-50%) translateY(-130%);
  opacity: 0;
}

.brand-logo {
  display: block;
  height: 106px;
  width: auto;
  max-width: 360px;
  object-fit: contain;
}

  .nav-links {
    display: flex;
    align-items: center;
    gap: 24px;
    font-weight: 800;
    color: var(--navy);
  }

  .nav-links a {
    border-bottom: 3px solid transparent;
    padding: 8px 0;
  }

  .nav-links a:hover {
    border-bottom-color: var(--blue);
    color: var(--blue);
  }

  .hero-section {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 0.85fr);
  gap: clamp(28px, 5vw, 70px);
  align-items: center;
  padding: clamp(120px, 12vw, 150px) clamp(20px, 5vw, 72px) clamp(40px, 7vw, 80px);
  overflow: hidden;
}

  .hero-section::after {
    content: "";
    position: absolute;
    right: -80px;
    top: 0;
    width: 48%;
    height: 100%;
    background: linear-gradient(135deg, transparent 0 18%, rgba(13, 79, 159, 0.12) 18% 22%, transparent 22%);
    pointer-events: none;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    margin: 0 0 20px;
    color: var(--navy);
    font-size: clamp(18px, 2vw, 24px);
    font-style: italic;
    font-weight: 600;
    border-top: 2px solid var(--navy);
    border-bottom: 2px solid var(--navy);
    padding: 10px 0;
  }

  .hero-copy h1 {
    max-width: 760px;
    margin: 0;
    color: #174f96;
    font-size: clamp(36px, 5vw, 66px);
    line-height: 1.03;
    letter-spacing: -0.04em;
    font-weight: 950;
  }

  .hero-text {
    max-width: 690px;
    margin: 22px 0 0;
    color: #111827;
    font-size: clamp(18px, 2vw, 24px);
    line-height: 1.42;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 32px;
  }

  .primary-btn,
  .secondary-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 150px;
    border-radius: 999px;
    padding: 15px 24px;
    font-weight: 900;
    transition: 0.2s ease;
  }

  .primary-btn {
    background: linear-gradient(135deg, #1557a6, #0b1f36);
    color: white;
    box-shadow: 0 12px 24px rgba(13, 79, 159, 0.25);
  }

  .primary-btn:hover,
  .secondary-btn:hover {
    transform: translateY(-2px);
  }

  .secondary-btn {
    border: 2px solid var(--blue);
    color: var(--blue);
    background: white;
  }

  .hero-card {
    position: relative;
    z-index: 1;
  }

  .browser-frame {
    border: 12px solid #1f2937;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 30px 70px rgba(15, 23, 42, 0.28);
    background: white;
    transform: rotate(1deg);
  }

  .browser-dots {
    display: flex;
    gap: 8px;
    padding: 12px 16px;
    background: #0f172a;
  }

  .browser-dots span {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #cbd5e1;
  }

  .mock-page {
    padding: 34px;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 45%, #dbeafe 100%);
  }

  .mock-small {
    margin: 0;
    color: var(--blue);
    font-size: 14px;
    font-weight: 950;
    letter-spacing: 0.06em;
  }

  .mock-page h2 {
    margin: 10px 0;
    color: var(--navy);
    font-size: clamp(30px, 4vw, 46px);
    line-height: 1;
    font-weight: 950;
  }

  .mock-page p {
    color: var(--muted);
    font-weight: 700;
  }

  .mock-page button {
    border: 0;
    border-radius: 999px;
    background: var(--blue);
    color: white;
    font-weight: 900;
    padding: 12px 20px;
    margin: 8px 0 24px;
  }

  .mock-icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    border-top: 1px solid #dbe3ef;
    padding-top: 18px;
  }

  .mock-icons div {
    text-align: center;
    color: var(--blue);
    font-weight: 900;
    font-size: 12px;
  }

  .mock-icons svg {
    display: block;
    margin: 0 auto 6px;
  }

  .two-column-section {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 28px;
    padding: 28px clamp(20px, 5vw, 72px) 40px;
  }

  .panel {
    position: relative;
    border: 3px solid var(--blue);
    border-radius: 22px;
    background: white;
    box-shadow: 0 14px 38px rgba(15, 23, 42, 0.08);
  }

  .section-tab {
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 260px;
    border-radius: 10px 10px 18px 18px;
    background: linear-gradient(135deg, var(--blue), var(--navy));
    color: white;
    padding: 12px 30px;
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 950;
    letter-spacing: 0.04em;
    box-shadow: 0 10px 20px rgba(13, 79, 159, 0.25);
  }

  .service-list {
    padding: 42px 26px 22px;
  }

  .service-row {
    display: grid;
    grid-template-columns: 86px 1fr;
    gap: 20px;
    align-items: center;
    padding: 19px 0;
    border-bottom: 1px solid var(--line);
  }

  .service-row:last-child {
    border-bottom: 0;
  }

  .circle-icon,
  .price-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: radial-gradient(circle at 30% 30%, var(--blue-2), var(--navy));
    border-radius: 999px;
    box-shadow: inset 0 0 0 4px rgba(255,255,255,0.2);
  }

  .circle-icon {
    width: 76px;
    height: 76px;
  }

  .service-row h3 {
    margin: 0 0 6px;
    color: var(--blue);
    font-size: 24px;
    line-height: 1;
    font-weight: 950;
  }

  .service-row p,
  .pricing-row p {
    margin: 0;
    color: #111827;
    font-size: 17px;
    line-height: 1.35;
  }

  .pricing-panel {
    overflow: hidden;
  }

  .panel-header {
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 22px 28px;
    background: linear-gradient(135deg, var(--blue), var(--navy));
    color: white;
  }

  .panel-header h2 {
    margin: 0;
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 950;
  }

  .panel-header svg {
    padding: 8px;
    width: 54px;
    height: 54px;
    border: 2px solid rgba(255,255,255,0.75);
    border-radius: 999px;
  }

  .pricing-list {
    padding: 18px 24px 20px;
  }

  .pricing-row {
    display: grid;
    grid-template-columns: 70px 1fr auto;
    gap: 18px;
    align-items: center;
    padding: 22px 0;
    border-bottom: 2px dashed var(--line);
  }

  .pricing-row:last-child {
    border-bottom: 0;
  }

  .price-icon {
    width: 62px;
    height: 62px;
  }

  .price-copy h3 {
    margin: 0;
    color: var(--text);
    font-size: 22px;
    font-weight: 950;
  }

  .price-note {
    color: var(--blue) !important;
    font-weight: 950;
  }

  .price-value {
    min-width: 140px;
    text-align: right;
    color: var(--blue);
    font-size: clamp(32px, 3vw, 48px);
    font-weight: 950;
    white-space: nowrap;
  }

  .why-strip {
    margin: 0 clamp(20px, 5vw, 72px) 40px;
    border: 3px solid var(--navy);
    border-radius: 20px;
    background: white;
    overflow: hidden;
    box-shadow: 0 14px 38px rgba(15, 23, 42, 0.08);
  }

  .why-title {
    width: fit-content;
    min-width: 340px;
    margin: 0 auto;
    transform: translateY(-1px);
    border-radius: 0 0 18px 18px;
    background: linear-gradient(135deg, #111827, var(--navy));
    color: white;
    padding: 12px 30px;
    text-align: center;
    font-size: 34px;
    font-weight: 950;
  }

  .why-items {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0;
    padding: 18px 18px 24px;
  }

  .why-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 96px;
    color: var(--navy);
    text-align: center;
    font-weight: 900;
    border-right: 1px solid var(--line);
  }

  .why-item:last-child {
    border-right: 0;
  }

  .why-item svg {
    color: white;
    background: radial-gradient(circle at 30% 30%, var(--blue-2), var(--navy));
    border-radius: 999px;
    width: 56px;
    height: 56px;
    padding: 13px;
  }

  .care-section {
  padding: 30px clamp(20px, 5vw, 72px) 52px;
  background: #f8fbff;
}

  .section-heading {
    text-align: center;
    margin-bottom: 28px;
  }

  .section-heading p {
    display: inline-block;
    margin: 0 0 14px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--blue), var(--navy));
    color: white;
    padding: 12px 22px;
    font-size: 22px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .section-heading h2 {
    margin: 0;
    color: var(--blue);
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1;
    font-weight: 950;
  }

  .section-heading span {
    display: block;
    max-width: 840px;
    margin: 14px auto 0;
    color: var(--muted);
    font-size: 19px;
    line-height: 1.45;
  }

  .care-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .care-card {
    overflow: hidden;
    border: 3px solid var(--blue);
    border-radius: 22px;
    background: white;
    box-shadow: 0 14px 38px rgba(15, 23, 42, 0.08);
  }

  .care-card-title {
    background: linear-gradient(135deg, var(--blue), var(--navy));
    color: white;
    padding: 16px;
    text-align: center;
    font-size: 24px;
    font-weight: 950;
    text-transform: uppercase;
  }

  .care-price {
    padding: 22px 22px 6px;
    color: var(--text);
    font-size: 22px;
    font-weight: 900;
  }

  .care-price span {
    color: var(--blue);
    font-size: 58px;
    line-height: 1;
    font-weight: 950;
  }

  .care-subtitle {
    margin: 12px 22px 16px;
    border-radius: 12px;
    background: var(--light-blue);
    padding: 14px;
    color: var(--text);
    font-style: italic;
    text-align: center;
  }

  .care-card ul {
    list-style: none;
    margin: 0;
    padding: 0 22px 24px;
  }

  .care-card li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin: 13px 0;
    color: var(--text);
    font-weight: 650;
    line-height: 1.25;
  }

  .care-card li svg {
    flex: 0 0 auto;
    color: var(--blue);
    margin-top: 1px;
  }

  .blue-callout {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    overflow: hidden;
    padding: 24px clamp(20px, 5vw, 72px);
    background: linear-gradient(135deg, var(--blue), var(--navy));
    color: white;
    text-align: center;
    border-top: 3px solid rgba(255,255,255,0.5);
    border-bottom: 3px solid rgba(255,255,255,0.5);
  }

  .callout-icon {
    width: 72px;
    height: 72px;
    object-fit: contain;
    border-radius: 999px;
    background: rgba(255,255,255,0.08);
  }

  .blue-callout h2 {
    margin: 0;
    font-size: clamp(30px, 4vw, 54px);
    line-height: 1;
    font-weight: 950;
  }

  .blue-callout p {
    margin: 8px 0 0;
    font-size: clamp(18px, 2vw, 27px);
    font-style: italic;
  }

  .diamond-line {
    flex: 1;
    max-width: 220px;
    height: 90px;
    opacity: 0.35;
    background:
      linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%),
      linear-gradient(-45deg, transparent 48%, white 49%, white 51%, transparent 52%);
  }

  .footer-bar {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1.35fr;
    gap: 24px;
    align-items: center;
    padding: 24px clamp(20px, 5vw, 72px);
    background: linear-gradient(135deg, #111827, #07111f);
    color: white;
  }

  .footer-brand,
  .footer-link {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .footer-brand img {
    width: 82px;
    height: 82px;
    object-fit: contain;
    border-radius: 999px;
    border: 2px solid rgba(255,255,255,0.6);
    background: rgba(255,255,255,0.05);
  }

  .footer-brand p,
  .footer-brand h2 {
    margin: 0;
  }

  .footer-brand p {
    font-size: 24px;
    font-weight: 950;
  }

  .footer-brand h2 {
    color: #60a5fa;
    font-size: 34px;
    line-height: 1;
    font-weight: 950;
  }

  .footer-link {
    border-left: 2px solid rgba(255,255,255,0.35);
    padding-left: 24px;
    font-size: 21px;
    font-weight: 950;
  }

  .footer-link svg {
    flex: 0 0 auto;
    width: 58px;
    height: 58px;
    padding: 14px;
    border-radius: 999px;
    background: radial-gradient(circle at 30% 30%, var(--blue-2), var(--navy));
    border: 2px solid rgba(255,255,255,0.6);
  }

  .footer-link small {
    display: block;
    color: #dbeafe;
    font-size: 15px;
    font-weight: 700;
  }

  @media (max-width: 1100px) {
    .hero-section,
    .two-column-section,
    .care-grid,
    .footer-bar {
      grid-template-columns: 1fr;
    }

    .nav-links {
      display: none;
    }

    .why-items {
      grid-template-columns: repeat(3, 1fr);
    }

    .why-item:nth-child(3) {
      border-right: 0;
    }

    .footer-link {
      border-left: 0;
      padding-left: 0;
    }
  }
  
  .nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
  font-weight: 800;
  color: var(--navy);
}

.mobile-menu-button {
  display: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 2px solid var(--blue);
  border-radius: 14px;
  background: white;
  color: var(--blue);
  cursor: pointer;
}

.mobile-nav {
  display: none;
}

  @media (max-width: 700px) {
  .top-bar {
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    transform: none;
    border-radius: 0;
    min-height: 78px;
    padding: 10px 18px;
    justify-content: space-between;
  }

  .top-bar-visible,
  .top-bar-hidden {
    transform: none;
    opacity: 1;
  }

  .brand-logo {
    height: 58px;
    width: auto;
    max-width: 230px;
  }

  .nav-links {
    display: none;
  }

  .mobile-menu-button {
    display: inline-flex;
    flex: 0 0 auto;
  }

  .mobile-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: grid;
    gap: 0;
    background: white;
    border-bottom: 1px solid #dbe3ef;
    box-shadow: 0 18px 28px rgba(15, 23, 42, 0.12);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s ease;
  }

  .mobile-nav-open {
    max-height: 280px;
  }

  .mobile-nav a {
    padding: 18px 24px;
    color: var(--navy);
    font-weight: 900;
    border-top: 1px solid #edf2f7;
  }

  .mobile-nav a:hover {
    background: var(--light-blue);
    color: var(--blue);
  }

  .hero-section {
    padding-top: 115px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .mock-icons {
    grid-template-columns: 1fr;
  }

  .service-row,
  .pricing-row {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .circle-icon,
  .price-icon {
    margin: 0 auto;
  }

  .price-value {
    min-width: 0;
    text-align: center;
  }

  .section-tab,
  .why-title {
    min-width: 0;
    width: calc(100% - 40px);
    font-size: 24px;
  }

  .why-items {
    grid-template-columns: 1fr;
  }

  .why-item {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .why-item:last-child {
    border-bottom: 0;
  }

  .diamond-line {
    display: none;
  }

  .blue-callout {
    flex-direction: column;
  }

  .footer-brand,
  .footer-link {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

  .footer-link {
    word-break: break-word;
  }
}
  
`;

