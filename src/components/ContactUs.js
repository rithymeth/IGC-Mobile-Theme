import React from 'react';
import { FaLine, FaPhoneAlt, FaCommentAlt, FaEnvelope, FaFacebook, FaWeixin, FaYoutube, FaTelegram, FaSkype, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
  const contactMethods = [
    { icon: <FaLine />, text: 'Contact Us Now!', subtext: 'Line', backgroundColor: '#00B900' },
    { icon: <FaPhoneAlt />, text: '+85593756936', subtext: 'Hotline', backgroundColor: '#25D366' },
    { icon: <FaCommentAlt />, text: 'Live Chat', subtext: 'Chat with us', backgroundColor: '#333333' },
    { icon: <FaEnvelope />, text: 'Cs@lcggaming.Com', subtext: 'Email', backgroundColor: '#EA4335' },
    { icon: <FaFacebook />, text: 'Like And Follow Up!', subtext: 'Facebook', backgroundColor: '#1877F2' },
    { icon: <FaWeixin />, text: 'lcggaming', subtext: 'WeChat ID', backgroundColor: '#7BB32E' },
    { icon: <FaYoutube />, text: 'Subscribe Now!', subtext: 'YouTube', backgroundColor: '#FF0000' },
    { icon: <FaTelegram />, text: 'Contact Us', subtext: 'Telegram', backgroundColor: '#0088CC' },
    { icon: <FaSkype />, text: 'Contact Us Now!', subtext: 'Skype', backgroundColor: '#00AFF0' },
    { icon: <FaTwitter />, text: 'Follow Now!', subtext: 'Twitter', backgroundColor: '#1DA1F2' },
  ];

  return (
    <div style={{
      backgroundColor: '#1f1f1f',
      padding: '30px',
      borderRadius: '15px',
      maxWidth: '800px',
      margin: '40px auto',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '30px', 
        color: '#E63946', 
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>Contact Us</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
      }}>
        {contactMethods.map((method, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: method.backgroundColor,
            color: '#fff',
            padding: '20px',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
          }}
          >
            <div style={{ fontSize: '36px', marginBottom: '10px' }}>{method.icon}</div>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>{method.subtext}</span>
            <span style={{ fontSize: '0.9rem', textAlign: 'center' }}>{method.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;