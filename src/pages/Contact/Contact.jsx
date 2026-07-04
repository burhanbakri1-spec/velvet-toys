import { motion } from 'framer-motion';
import SectionTitle from '../../components/shared/SectionTitle';
import { fadeIn, fadeInLeft, fadeInRight } from '../../utils/animations';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1 className="contact-hero-title">Contact</h1>
          <p className="contact-hero-subtitle">Get in touch with Velvet.</p>
        </div>
      </div>

      <motion.section
        className="contact-section container"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="contact-layout">
          <motion.div
            className="contact-info"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle title="Get in Touch" />
            <p>
              For general inquiries, please reach out to us using the contact form
              or through our social media channels.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <strong>Email:</strong>
                <p>info@velvettoys.com</p>
              </div>
              <div className="contact-detail">
                <strong>Address:</strong>
                <p>Velvet Limited<br />Hong Kong</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="contact-form-wrapper"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="contact-form-title">Send us a message</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message" />
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
