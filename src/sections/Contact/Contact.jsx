import styles from './ContactStyles.module.css'
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  var initialState = {
    user_name: '',
    user_email: '',
    message: ''
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState(initialState);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_crkly2s', 'template_y0iqwii', form.current, {
        publicKey: 'F-Drv3FTx0m_4ZzdH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message Sent !");
          setFormData(initialState);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Oops!Message is unable to be Sent !");
        },
      );
    
  };

  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      {/* <form action="" method='POST'> */}
      <form ref={form} onSubmit={sendEmail}>
        <div className='formGroup'>
            <label htmlFor="user_name" hidden>Name</label>
            <input type="text" name='user_name' value={formData.user_name} onChange={handleChange} placeholder='Name' required />
        </div>
        <div className='formGroup'>
            <label htmlFor="user_email" hidden>Email</label>
            <input type="email" name='user_email' value={formData.user_email} onChange={handleChange} placeholder='Email' required />
        </div>
        <div className='formGroup'>
            <label htmlFor="message" hidden>Message</label>
            <textarea name='message' placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <input type="submit" value="Send" className='hover btn' />
      </form>
    </section>
  )
}

export default Contact