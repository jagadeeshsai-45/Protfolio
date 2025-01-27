import React, { useState } from 'react';
import './contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [input, setInput] = useState({
    from_name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const handleSendMail = (e) => {
    e.preventDefault();

    if (!input.email || !input.message || !input.from_name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    }

    emailjs.send('service_a6drdjh', 'template_ore59hc', input, '375FQNb_5OeuwPzaY')
      .then((response) => {
        alert('Message sent successfully!');
        setInput({ from_name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="contact-main">
      <div className="contact-left">
        <h2>Contact With Me</h2>

        <form className="contact-form">
          <label>Your Name:</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={input.from_name}
            onChange={(e) => setInput({ ...input, from_name: e.target.value })}
            required 
          />

          <label>Your Email:</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            required 
          />
          {error.required && !input.email && <span className="error">Please provide a valid email!</span>}

          <label>Your Message:</label>
          <textarea 
            name="message" 
            placeholder="Enter your message" 
            value={input.message}
            onChange={(e) => setInput({ ...input, message: e.target.value })}
            required
          ></textarea>
          {error.required && !input.message && <span className="error">Message is required!</span>}

        

          <button type="submit" onClick={handleSendMail}>
            Send Message <FaEnvelope />
          </button>
        </form>
      </div>

      <div className="contact-right">
        <div className='contact-bottom'>
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <p>saijagadeesh699@gmail.com</p>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <p>+919014758798</p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <p>Tanuku, Andhra pradesh, India-534328</p>
            </div>
          </div>

          <div className="social-media-wrap">
            <a href="https://github.com/jagadeesh-45" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href=" https://www.linkedin.com/in/jagadeesh-sai-pippara-49b381267" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
             
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
