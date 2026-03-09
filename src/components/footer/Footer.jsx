import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Clock, ChevronRight,
  Facebook, Twitter, Instagram, Youtube
} from 'lucide-react';
import logo from "../../assets/logo.png"


// --- CONFIGURATION OBJECT ---
// Developers can easily update links, labels, and icons here.
const FOOTER_DATA = {
  storeInfo: {
    title: "Store Information",
    details: [
      { id: 1, icon: MapPin, text: "123 Market St, Suite 456, New York, NY 10001", isAddress: true },
      { id: 2, icon: Phone, text: "+1 (234) 567-890", path: "tel:+1234567890" },
      { id: 3, icon: Mail, text: "support@elcon.com", path: "mailto:support@elcon.com" },
    ]
  },
  company: {
    title: "Our Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Contact Us", path: "/contact" },
      { label: "Terms & Conditions", path: "/terms" },
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Brand Directory", path: "/brands" },
    ]
  },
  products: {
    title: "Products",
    links: [
      { label: "Electronics", path: "/category/electronics" },
      { label: "Fashion", path: "/category/fashion" },
      { label: "Home Decor", path: "/category/home" },
      { label: "New Arrivals", path: "/shop/new" },
      { label: "Special Offers", path: "/shop/offers" },
    ]
  },
  account: {
    title: "Our Account",
    links: [
      { label: "My Profile", path: "/profile" },
      { label: "Order History", path: "/orders" },
      { label: "Wishlist", path: "/wishlist" },
      { label: "Track Order", path: "/track-order" },
      { label: "Gift Cards", path: "/gift-cards" },
    ]
  },
  openingHours: {
    title: "Opening Hours",
    schedule: [
      { day: "Mon - Fri:", time: "08:00 - 20:00", status: "open" },
      { day: "Saturday:", time: "09:00 - 18:00", status: "open" },
      { day: "Sunday:", time: "Closed", status: "closed" },
    ]
  }
};

const SOCIAL_LINKS = [
  { icon: Facebook, path: "https://facebook.com" },
  { icon: Twitter, path: "https://twitter.com" },
  { icon: Instagram, path: "https://instagram.com" },
  { icon: Youtube, path: "https://youtube.com" },
];

const PAYMENT_METHODS = [
  { name: "Visa", src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg", height: "h-3" },
  { name: "Mastercard", src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg", height: "h-6" },
  { name: "PayPal", src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", height: "h-4" },
  { name: "Amex", src: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg", height: "h-6" },
];

// --- SUB-COMPONENTS FOR CLEANER CODE ---

const FooterColumn = ({ title, children }) => (
  <div className="flex flex-col gap-5">
    <h4 className="font-bold text-gray-800 uppercase tracking-widest text-[13px]">{title}</h4>
    {children}
  </div>
);

const Footer = () => {
  const primaryColor = "#434377";

  return (
    <footer className="w-full bg-white font-sans border-t border-gray-100">

      {/* 1. Main 5-Column Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {/* Store Info Column */}
        <FooterColumn title={FOOTER_DATA.storeInfo.title}>
          <ul className="space-y-4">
            {FOOTER_DATA.storeInfo.details.map((item) => (
              <li key={item.id} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                <item.icon size={20} style={{ color: primaryColor }} className="shrink-0 mt-0.5" />
                {item.path ? <a href={item.path} className="hover:text-[#434377]">{item.text}</a> : <span>{item.text}</span>}
              </li>
            ))}
          </ul>
        </FooterColumn>

        {/* Dynamic Link Columns (Company, Products, Account) */}
        {[FOOTER_DATA.company, FOOTER_DATA.products, FOOTER_DATA.account].map((col) => (
          <FooterColumn key={col.title} title={col.title}>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-gray-600 text-sm hover:translate-x-1 hover:text-[#434377] transition-all flex items-center gap-2 group">
                    <ChevronRight size={12} className="text-gray-300 group-hover:text-[#434377]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
        ))}

        {/* Opening Hours Column */}
        <FooterColumn title={FOOTER_DATA.openingHours.title}>
          <div className="bg-gray-50 p-5 rounded-2xl space-y-3 border border-gray-100">
            {FOOTER_DATA.openingHours.schedule.map((item) => (
              <div key={item.day} className="flex justify-between text-xs border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                <span className="text-gray-500 font-medium">{item.day}</span>
                <span className={`font-bold ${item.status === 'closed' ? 'text-red-500' : 'text-gray-800'}`}>
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </FooterColumn>
      </div>

      {/* 2. Brand & App Downloads */}
      <div className="border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <Link to="/" className="text-3xl font-black italic tracking-tighter" style={{ color: primaryColor }}>
            <img src={logo} alt="log" className='h-8' />
          </Link>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:scale-105 transition-transform"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" /></a>
            <a href="#" className="hover:scale-105 transition-transform"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" /></a>
          </div>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map((item, idx) => (
              <a key={idx} href={item.path} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-[#434377] hover:text-white transition-all">
                <item.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright & Payments */}
      <div style={{ backgroundColor: primaryColor }} className="py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/70 font-medium">
            © 2025 <span className="text-white">ELCON</span>. All rights reserved.
            Built for premium shopping experiences.
          </p>

          <div className="flex items-center gap-5 bg-white/5 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
            {PAYMENT_METHODS.map((card) => (
              <img key={card.name} src={card.src} alt={card.name} className={`${card.height} transition-all cursor-pointer`} title={card.name} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;