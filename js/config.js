// ==========================================
// MASTER WHITE-LABEL PHARMACY CONTROL PANEL
// ==========================================

const siteConfig = {
  pharmacyName: "Deevee Pharmacy",
  tagline: "Precision Care, Genuine Medications & Fast Delivery",
  heroHeadline: "Your Community’s Most Trusted Modern Pharmacy",
  heroSubtext: "From verified prescription medications to daily wellness essentials and pharmacist consultations—delivered straight to your doorstep across Kumasi with care.",
  
  // Contact & Operations (Two emails included!)
  phone: "+233 59 786 1853",
  whatsapp: "+233 59 786 1853",
  emailPrimary: "derryvegas810@gmail.com",
  emailSecondary: "elderderry810@gmail.com",
  location: "Tanoso High Street, Around USTED Kumasi Campus",
  hours: "Mon – Sat: 7:30 AM – 10:00 PM | Sun: Closed (Rest Day)",
  
  // Brand Color
  primaryColor: "#0f766e",   // Deep Medical Teal
  accentColor: "#14b8a6",    // Bright Mint Accent
  year: "2026"
};

document.addEventListener("DOMContentLoaded", () => {
  // Apply Custom Theme Colors Dynamically
  document.documentElement.style.setProperty("--primary-color", siteConfig.primaryColor);
  document.documentElement.style.setProperty("--accent-color", siteConfig.accentColor);

  // Update Page Title
  document.title = document.title.replace("{{BRAND}}", siteConfig.pharmacyName);

  // Inject Text Content Everywhere
  document.querySelectorAll('.brand-name').forEach(el => el.textContent = siteConfig.pharmacyName);
  document.querySelectorAll('.brand-tagline').forEach(el => el.textContent = siteConfig.tagline);
  document.querySelectorAll('.brand-location').forEach(el => el.textContent = siteConfig.location);
  document.querySelectorAll('.brand-hours').forEach(el => el.textContent = siteConfig.hours);
  document.querySelectorAll('.brand-phone').forEach(el => el.textContent = siteConfig.phone);
  document.querySelectorAll('.brand-email-primary').forEach(el => el.textContent = siteConfig.emailPrimary);
  document.querySelectorAll('.brand-email-secondary').forEach(el => el.textContent = siteConfig.emailSecondary);
  document.querySelectorAll('.brand-year').forEach(el => el.textContent = siteConfig.year);
});