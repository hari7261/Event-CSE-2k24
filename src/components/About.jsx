/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const EventDetails = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      Event Details
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Welcome to the Annual Tech Fest 2024, hosted by the CSE Department at Excel Engineering College! This year, we bring you a series of thrilling competitions, insightful workshops, and inspiring talks designed to ignite your passion for technology.
      </motion.p>

      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        **Key Highlights:**
        <ul>
          <li><strong>Hackathon:</strong> Team up to solve real-world problems within 24 hours.</li>
          <li><strong>Workshops:</strong> Learn from industry experts in areas like AI, Blockchain, and Web Development.</li>
          <li><strong>Guest Speakers:</strong> Get inspired by leaders in the tech world sharing their experiences.</li>
        </ul>
      </motion.p>

      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        **Date & Venue:** The event will be held on September 10-12, 2024, at the Main Auditorium and adjacent halls of Excel Engineering College.
      </motion.p>

      <motion.p variants={fadeIn('', '', 1.5, 1)} className={style.text}>
        **Registration:** Don’t miss out on this exciting event! Register now through the link below:
        {' '}
        <a
          href="https://example.com/register"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Register Here
        </a>
      </motion.p>

      <motion.p variants={fadeIn('', '', 1.75, 1)} className={style.text}>
        For more details about the event schedule and speakers, feel free to check out our event brochure:
        {' '}
        <a
          href="https://example.com/brochure"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Event Brochure
        </a>
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(EventDetails, 'event', '');
