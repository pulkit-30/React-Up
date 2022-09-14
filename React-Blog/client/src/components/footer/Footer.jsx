import React from 'react';
import style from '../../style/footer.module.css';
const Footer = () => {
  const year = new Date();
  return (
    <footer className={style.Footer + ' flex'}>
      All rights reserved © {year.getFullYear()}
    </footer>
  );
};

export default Footer;
