import { skills } from "../../data/skills";
import { hardSkills } from "../../data/hardSkills";
import AnimatedSection from "../UI/AnimatedSection/AnimatedSection";
import cls from "./Skills.module.css";

interface ISkillsProps {
  isSimple?: boolean;
}

const Skills: React.FC<ISkillsProps> = ({ isSimple = true }) => {
  return (
    <AnimatedSection
      id="skills"
      className={cls.skills}
      delay={200}
      threshold={0.2}
      animation="slide-up"
    >
      <h2 className="section-title">Мои умения</h2>
      {isSimple ? (
        <>
          <div className={`${cls.skillsGrid} container`}>
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={cls.skillCard}
                style={{ color: skill.color }}
              >
                <div className={cls.skillIcon}>{skill.icon}</div>
                <h3 className={cls.skillName}>{skill.name}</h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={`${cls.hardSkillsGrid} container`}>
            {hardSkills.map((skill) => (
              <p key={skill} className={cls.hardSkillCard}>
                <span className="circle"></span>
                {skill}
              </p>
            ))}
          </div>
        </>
      )}
    </AnimatedSection>
  );
};

export default Skills;
