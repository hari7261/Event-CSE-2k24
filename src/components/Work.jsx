/* eslint-disable no-undef */
/* eslint-disable eol-last */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import style from './styles/work.module.css';
import SectionWrapper from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import Popup from './Popup';
import python1 from '../assets/carousels/python1.png';
// import python2 from '../assets/carousels/python2.png';
// import codevision1 from '../assets/carousels/codevision (1).png';
// import codevision2 from '../assets/carousels/codevision (2).png';

const events = [
  {
    id: 1,
    name: 'Tech Innovations Workshop',
    desc: 'A hands-on workshop where participants will dive into the latest trends in technology and innovation.',
    date: 'September 15, 2024',
    time: '10:00 AM - 3:00 PM',
    location: 'Main Auditorium',
    img: python1,
    link: 'https://example.com/event1', // Update with correct link
  },
  {
    id: 2,
    name: 'AI and Data Science Conference',
    desc: 'Explore the world of Artificial Intelligence and Data Science with leading experts.',
    date: 'October 5, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Conference Hall A',
    img: python1,
    link: 'https://example.com/event2', // Update with correct link
  },
  {
    id: 3,
    name: 'AI and Data Science Conference',
    desc: 'Explore the world of Artificial Intelligence and Data Science with leading experts.',
    date: 'October 5, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Conference Hall A',
    img: python1,
    link: 'https://example.com/event3', // Update with correct link
  },
  {
    id: 4,
    name: 'AI and Data Science Conference',
    desc: 'Explore the world of Artificial Intelligence and Data Science with leading experts.',
    date: 'October 5, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Conference Hall A',
    img: python1,
    link: 'https://example.com/event4', // Update with correct link
  },
  {
    id: 5,
    name: 'AI and Data Science Conference',
    desc: 'Explore the world of Artificial Intelligence and Data Science with leading experts.',
    date: 'October 5, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Conference Hall A',
    img: python1,
    link: 'https://example.com/event4', // Update with correct link
  },
  {
    id: 6,
    name: 'AI and Data Science Conference',
    desc: 'Explore the world of Artificial Intelligence and Data Science with leading experts.',
    date: 'October 5, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Conference Hall A',
    img: python1,
    link: 'https://example.com/event4', // Update with correct link
  },
];

const Work = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handlePopupClick = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handlePopupClose = () => {
    setSelectedEvent(null);
    setOpen(false);
  };

  return (
    <div className="relative">
      <motion.h1 variants={textVariant()} className={style.title}>
        Workshops and Events
      </motion.h1>
      <div className={style.project_container}>
        {/* Event Card */}
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            variants={fadeIn('up', '', index * 0.4, 0.5)}
            className={style.card}
          >
            <img className={style.img} src={event.img} alt={event.name} loading="lazy" />
            <div className={style.card_overlay}>
              <div className={style.card_text}>
                <div className={style.text}>
                  <h2 className={style.name}>{event.name}</h2>
                  <p className={style.date}>{event.date}</p>
                  <p className={style.time}>{event.time}</p>
                  <p className={style.location}>{event.location}</p>
                </div>
                <button
                  type="button"
                  className={style.btn_container}
                  onClick={() => handlePopupClick(event)}
                >
                  <span className={style.btn_hover}>Learn more</span>
                  <span className={style.btn}>Learn more</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <Popup handleClose={handlePopupClose} event={selectedEvent} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Work, 'work', 'my-8');