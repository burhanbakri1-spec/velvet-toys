import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/shared/SectionTitle';
import aboutHeroBg from '../../assets/images/collection-4dce34bf45802e2e4724c17b51b0980b.png';
import { fadeInLeft, fadeInRight, scaleIn, reveal } from '../../utils/animations';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero" style={{ backgroundImage: `url(${aboutHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="about-hero-overlay" />
        <div className="container">
          <h1 className="about-hero-title">About</h1>
        </div>
      </div>

      <motion.section
        className="about-section"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container about-section-grid">
          <motion.div
            className="about-section-image"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="https://cdn.sanity.io/images/j1qnzlrr/production/3890b7f9812487850126b01b17a0d4792fcb8e43-721x962.png"
              alt="Joyful children playing with water"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="about-section-text"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>Let's Reimagine</h2>
            <p>
              Let's reimagine a world unbridled by restraint. Where anything you can think, you can do.
              Where anything you design, you can make. Where creativity is free to roam, and where
              imagination unleashes innovation, excitement, connection and joy. That's the power of play,
              and at Velvet, we're reimagining it, every day.
            </p>
            <p>
              Here, creativity is the tool. Scale, automation and agility are the strengths. And better
              solutions is the goal, delivering quality, relevance and affordability for all. Driven by
              heart and connected by our desire for improvement, together, we're redefining the status
              quo by reimagining tomorrow.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="about-section bg-light"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container about-section-grid reverse">
          <motion.div
            className="about-section-image"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="https://cdn.sanity.io/images/j1qnzlrr/production/9e925ab02ce983f6edc9d29fb199d7151f7e98fd-1440x1712.jpg"
              alt="Team Velvet members at a company event"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="about-section-text"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>Our Team and Culture</h2>
            <p>
              At Velvet, we're a team of high-performing people brought together by our shared purpose.
              With offices across 10 countries, our diverse and global team is bound by a desire to think
              differently, disrupt the status quo and have fun doing it.
            </p>
            <p>
              People are at the heart of our company, and the needs and values of people are at the heart
              of everything we make. Championing the driven and the brave, our supportive, tight-knit
              culture excels at giving our people the trust and freedom to work with speed, agility and
              initiative - enabling themselves, and their projects to flourish. At Velvet, anything you
              do, you do on a global scale, so opportunities for career growth are endless.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="about-section"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container about-section-grid">
          <motion.div
            className="about-section-image"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="https://cdn.sanity.io/images/j1qnzlrr/production/cb7a967a15d1058b75576d87b4b57cf435bf9b3a-6720x4480.webp"
              alt="Sustainability"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="about-section-text"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>Sustainability</h2>
            <p>
              We believe that becoming myopic in the toy industry is to become redundant. This is
              why we approach business with a vision of preparing for the future - the world which
              children will one day live and play. Sustainability is a commitment to current and future
              generations, to leave this world better than when we were brought into it.
            </p>
            <p>
              The social conscience of our society is growing every day and so too is the social
              conscience of our company. We have individuals in our team who are extremely passionate
              about sustainability, and are constantly looking at how we can incorporate sustainable
              practices into our business, products, and future lines of toys and consumer goods.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="about-section bg-light"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container about-section-grid reverse">
          <motion.div
            className="about-section-image"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="https://cdn.sanity.io/images/j1qnzlrr/production/4656424841ecbabd44e7856aa2a2b0588b9e7087-1070x762.png"
              alt="Taking a Stand - charity partnership"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="about-section-text"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>Taking a Stand</h2>
            <p>
              We are delighted to be official Corporate Partners of Shenzhen-based charity, Captivating
              International, as we support their mission to see underprivileged children reach a better
              tomorrow. Through two programs, the My First Job Program and Vocational School Scholarships,
              we hope to support over 300 young women back through education and give them a future they
              can look forward to.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="about-cta"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Inspired? Come work with us.
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/careers" className="btn btn-outline">Careers</Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
