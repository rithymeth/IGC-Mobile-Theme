import React from 'react';
import { FaLine, FaPhoneAlt, FaCommentAlt, FaEnvelope, FaFacebook, FaWeixin, FaYoutube, FaTelegram, FaSkype, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
  const contactMethods = [
    { icon: <FaLine color="#00B900" />, text: 'Line: Contact Us Now!', backgroundColor: '#00B900' },
    { icon: <FaPhoneAlt color="#fff" />, text: 'Hotline: +85593756936', backgroundColor: '#25D366' },
    { icon: <FaCommentAlt color="#fff" />, text: 'Live Chat', backgroundColor: '#333333' },
    { icon: <FaEnvelope color="#fff" />, text: 'Email: Cs@lcggaming.Com', backgroundColor: '#EA4335' },
    { icon: <FaFacebook color="#fff" />, text: 'Facebook: Like And Follow Up!', backgroundColor: '#1877F2' },
    { icon: <FaWeixin color="#fff" />, text: 'Wechat: lcggaming (Add This ID)', backgroundColor: '#7BB32E' },
    { icon: <FaYoutube color="#fff" />, text: 'YouTube: Subscribe Now!', backgroundColor: '#FF0000' },
    { icon: <FaTelegram color="#fff" />, text: 'Telegram: Contact Us', backgroundColor: '#0088CC' },
    { icon: <FaSkype color="#fff" />, text: 'Skype: Contact Us Now!', backgroundColor: '#00AFF0' },
    { icon: <FaTwitter color="#fff" />, text: 'Twitter: Follow Now!', backgroundColor: '#1DA1F2' },
  ];

  return (
    <div style={{
      backgroundColor: '#2a2a2a',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '400px',
      margin: '20px auto',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
      {contactMethods.map((method, index) => (
        <div key={index} style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: method.backgroundColor,
          color: '#fff',
          padding: '10px 15px',
          borderRadius: '25px',
          marginBottom: '10px',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{ marginRight: '10px', fontSize: '24px' }}>{method.icon}</div>
          <span>{method.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ContactUs;