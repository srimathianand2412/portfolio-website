import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
const Contact=() =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_32zzeob', 'template_z9q3y3r', form.current, 'N8uKq8TQv9OWXfY8f')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('E-mail sent');
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <section id ="contactpage">
            <div id="contact">
                <h1 className="contactpageTitle"> Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='from_name'/>
                    <input type="email" className="email" placeholder="Your E-Mail" name='from_email'/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"/>
                    <button type="submit" value='sendEmail' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link"/>
                        <img src={TwitterIcon} alt="Twitter" className="link"/>
                        <img src={InstagramIcon} alt="Instagram" className="link"/>

                    </div>

                </form>

            </div>
        </section>

    );
}
export default Contact;