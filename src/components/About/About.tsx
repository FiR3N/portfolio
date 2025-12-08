import React from "react";
import cls from "./About.module.css";
import AnimatedSection from "../UI/AnimatedSection/AnimatedSection";

const About: React.FC = () => {
  return (
    <AnimatedSection
      id="about"
      className={cls.about}
      animation="slide-up"
      delay={200}
      threshold={0.1}
    >
      <h2 className="section-title">Обо мне</h2>
      <div className={`${cls.aboutContent} container`}>
        <div className={cls.aboutText}>
          <p>
            Привет! Я фронтенд-разработчик, увлечённый созданием качественных
            веб-приложений. В течение последних лет активно изучаю современные
            технологии и фреймворки.
          </p>
          <p>
            Мой путь в IT начался ещё в колледже, но тех знаний, которые он
            давал, оказалось недостаточно, и я начал самостоятельно изучать
            основы веб-разработки. Прошёл несколько онлайн-курсов и продолжаю
            углублять свои знания через практику и создание реальных проектов.
          </p>
          <p>
            В свободное время люблю изучать новые технологии, решать
            алгоритмические задачи и разрабатывать небольшие веб-приложения.
          </p>
        </div>
        <div className={cls.aboutStats}>
          <div className={cls.aboutStat}>
            <span className={cls.aboutStatNumber}>1+</span>
            <span className={cls.aboutStatLabel}>Год опыта</span>
          </div>
          <div className={cls.aboutStat}>
            <span className={cls.aboutStatNumber}>10+</span>
            <span className={cls.aboutStatLabel}>Завершенных проектов</span>
          </div>
          <div className={cls.aboutStat}>
            <span className={cls.aboutStatNumber}>1000+</span>
            <span className={cls.aboutStatLabel}>Часов кодинга</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
