import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import style from './styles/home.module.css';
import { fadeIn, staggerContainer } from '../utils/motion';

const EventHome = () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <div className={style.container}>
      <p className={style.intro}>
        Welcome to the
        {' '}
        <motion.span variants={fadeIn('', '', 0.1, 1)} className={style.name}>
          Annual Tech Fest 2024
        </motion.span>
      </p>
      <p className={style.intro}>
        Hosted by the
        {' '}
        <motion.span variants={fadeIn('', '', 0.3, 1)} className={style.name}>
          CSE Department
        </motion.span>
      </p>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.desc}>
        Join now for workshops, competitions, and talks that push the boundaries of technology.
      </motion.p>
      <motion.button
        variants={fadeIn('', '', 0.6, 1)}
        className={style.btn_container}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <span className={style.btn_hover}>
          Discover the Schedule
        </span>
        <span className={style.btn}>
          Discover the Schedule
        </span>
        <MdOutlineArrowForwardIos className={style.arrow} />
      </motion.button>
    </div>
  </motion.section>
);

export default EventHome;
