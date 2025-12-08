import me from "../../assets/images/me_2.webp";
import AnimatedSection from "../UI/AnimatedSection/AnimatedSection";
import Button from "../UI/Button/Button";
import cls from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <AnimatedSection
      id="home"
      className={cls.hero}
      delay={200}
      threshold={0.0}
      animation="slide-right"
    >
      <div className={`${cls.heroContent} container`}>
        <img className={cls.heroImage} src={me} alt="Владислав Космач" />
        <div className={cls.heroText}>
          <h1>Владислав Космач</h1>
          <h3>Frontend Developer</h3>
          <p>
            Создаю современные, адаптивные веб-приложения с использованием
            React, TypeScript и других современных технологий. Стремлюсь к
            написанию чистого, поддерживаемого кода и постоянному развитию.
          </p>
          <div className={cls.heroButtons}>
            <Button type="primary" href="#projects">
              Мои проекты
            </Button>
            <Button type="secondary" href="#contact">
              Мои контакты
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
