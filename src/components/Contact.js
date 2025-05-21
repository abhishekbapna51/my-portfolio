// Contact.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contacts = [
  {
    name: "LinkedIn",
    icon: "/linkedin-icon.svg",
    url: "https://www.linkedin.com/in/abhishek-bapna-137895203/",
    username: "abhishek-bapna",
    displayName: "Abhishek Bapna",
    details: "500+ Connections",
    color: "bg-gradient-to-r from-blue-600 to-blue-400",
    platformIcon: "/linkedin-icon.svg",
    platformName: "LinkedIn"
  },
  {
    name: "Instagram",
    icon: "/ig-instagram-icon.svg",
    url: "https://www.instagram.com/abhishek_jain_03",
    username: "@abhishek_jain_03",
    displayName: "Abhishek Jain",
    details: "800+ Followers",
    color: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    platformIcon: "/ig-instagram-icon.svg",
    platformName: "Instagram"
  },
  {
    name: "GitHub",
    icon: "/github-black-icon.svg",
    url: "https://github.com/abhishekbapna51",
    username: "abhishekbapna51",
    displayName: "Abhishek Bapna",
    details: "30+ Repositories",
    color: "bg-gradient-to-r from-gray-800 to-gray-600",
    platformIcon: "/github-icon.svg",
    platformName: "GitHub"
  },
  {
    name: "Email",
    icon: "/gmail-icon.svg",
    url: "mailto:bapnaabhishek51@gmail.com",
    username: "bapnaabhishek51@gmail.com",
    displayName: "Abhishek Bapna",
    details: "Available for opportunities",
    color: "bg-gradient-to-r from-red-500 to-red-400",
    platformIcon: "/gmail-icon.svg",
    platformName: "Gmail",
    isEmail: true // Flag to identify email for special handling
  }
];

const Contact = () => {
  const [hoveredContact, setHoveredContact] = useState(null);

  const handleContactClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="bg-white py-10 px-4 md:px-20 scroll-mt-20" id="contact">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Contact</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-700">
        {contacts.map((contact) => (
          <div key={contact.name} className="relative flex flex-col items-center">
            <motion.button
              onClick={() => handleContactClick(contact.url)}
              onMouseEnter={() => setHoveredContact(contact.name)}
              onMouseLeave={() => setHoveredContact(null)}
              className="flex flex-col items-center gap-2 hover:text-blue-600 transition"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={hoveredContact === contact.name ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <img src={contact.icon} alt={contact.name} className="w-10 h-10" />
              </motion.div>
              <span className="text-base font-medium">{contact.name}</span>
            </motion.button>

            <AnimatePresence>
              {hoveredContact === contact.name && (
                <motion.div
                  className={`absolute z-10 -top-40 ${contact.isEmail ? 'w-56' : 'w-48'} p-0 rounded-lg overflow-hidden shadow-xl`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white border border-gray-200 rounded-lg">
                    {/* Header with platform-specific gradient */}
                    <div className={`h-2 ${contact.color}`}></div>
                    
                    {/* Content */}
                    <div className="p-4 text-center">
                      <p className="font-bold text-gray-800">{contact.displayName}</p>
                     <p className={`text-gray-600 text-sm ${contact.isEmail ? 'whitespace-nowrap overflow-x-auto px-1 text-xs' : ''}`}>
  {contact.username}
</p>
                      <p className="mt-2 text-gray-500 text-sm">{contact.details}</p>
                      
                      {/* Platform badge */}
                      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-center">
                        <img 
                          src={contact.platformIcon} 
                          alt={contact.platformName} 
                          className="w-4 h-4 mr-2" 
                        />
                        <span className="text-gray-600 text-xs">{contact.platformName}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;