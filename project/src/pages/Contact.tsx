import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xayrrald', {
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setMessageText('Message sent successfully!');
        setShowMessage(true);
        setFormData({ username: '', email: '', message: '' });
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      } else {
        setMessageText('Error sending message.');
        setShowMessage(true);
      }
    } catch (error) {
      setMessageText('Something went wrong.');
      setShowMessage(true);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container bd-grid">
        <form onSubmit={handleSubmit} className="contact__form">
          <input
            type="text"
            name="username"
            placeholder="Name"
            className="contact__input"
            value={formData.username}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="contact__input"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            cols={0}
            rows={10}
            placeholder="Your message..."
            className="contact__input"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Submit" className="contact__button button" />
        </form>
        
        {showMessage && (
          <div style={{ color: 'green', marginTop: '10px' }}>
            {messageText}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;