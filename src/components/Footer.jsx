import React from 'react';
import { motion } from 'framer-motion';
import { BsChevronDoubleUp } from 'react-icons/bs';
// import { FaExternalLinkAlt } from 'react-icons/fa'; // Import the new animated icon
import { fadeIn } from '../utils/motion';
import style from './styles/footer.module.css';

const Footer = () => (
  <motion.section
    id={style.footer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={style.footer_section}
  >
    <motion.div variants={fadeIn('', '', 1, 1)} className={style.up_icon_container}>
      <abbr title="back to home page">
        <button
          type="button"
          className={`${style.overlay} ${style.up_overlay}`}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <BsChevronDoubleUp className={`${style.icon_hover} ${style.up_icon_hover}`} />
          <BsChevronDoubleUp className={`${style.icon} ${style.up_icon}`} />
        </button>
      </abbr>
    </motion.div>
    <p className={style.title}>
      <span className={style.text}>Developed by Hariom</span>
    </p>
    {/* <div className={style.portfolio_icon_container}>
      <motion.a
        href="https://hari7261.github.io/Hariom--Portfolio/"
        target="_blank"
        className={style.portfolio_icon}
        rel="noreferrer"
        whileHover={{ scale: 1.2, rotate: 360 }} // Animation on hover
        transition={{ type: 'spring', stiffness: 300 }}
        aria-label="Portfolio"
      >
        <FaExternalLinkAlt />
      </motion.a>
    </div> */}
    <abbr title="Source Code" className={style.p}>
      <a href="https://hariom-react-next.vercel.app/home" target="_blank" className={style.a} rel="noreferrer">
        Brought into being by
        {' '}
        <span className={style.span}>©</span>
        {' '}
        Hariom Kumar Pandit
      </a>
    </abbr>
  </motion.section>
);

export default Footer;
