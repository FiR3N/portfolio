import React from "react";
import cls from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer id="contacts" className={cls.footer}>
      <div className={`${cls.footerContent} container`}>
        <div className={cls.footerInfo}>
          <h3>Владислав Космач</h3>
          <p>Frontend Developer</p>
        </div>
        <div id="contact" className={cls.footerLinks}>
          <a href="mailto:fir3norig@gmail.com">Email</a>
          <a
            href="https://github.com/FiR3N"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://vk.com/fir3n"
            target="_blank"
            rel="noopener noreferrer"
          >
            ВК
          </a>
          <a
            href="https://drive.google.com/file/d/1Vc975valQ1M_fEQuMlAi_MtaMBHLymZh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Резюме
          </a>
        </div>
      </div>
      <div className={cls.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Владислав Космач. Все права
          защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
