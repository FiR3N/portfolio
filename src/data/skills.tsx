import type { ISkill } from "../types/index";
import { DiCss3, DiHtml5, DiSass, DiJavascript, DiReact } from "react-icons/di";
import {
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

export const skills: ISkill[] = [
  {
    name: "HTML",
    color: "#E34F26",
    icon: <DiHtml5 />,
  },
  {
    name: "CSS",
    color: "#1572B6",
    icon: <DiCss3 />,
  },
  {
    name: "SCSS",
    color: "#CC6699",
    icon: <DiSass />,
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: <DiJavascript />,
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: <SiTypescript />,
  },
  {
    name: "React",
    color: "#61DAFB",
    icon: <DiReact />,
  },
  {
    name: "Redux",
    color: "#764ABC",
    icon: <SiRedux />,
  },
  {
    name: "Node.js",
    color: "#339933",
    icon: <SiNodedotjs />,
  },
  {
    name: "Express.js",
    color: "#ddebddff",
    icon: <SiExpress />,
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    icon: <SiPostgresql />,
  },
];
