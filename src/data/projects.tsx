import type { IProject } from "../types/index";
import ssm from "../assets/images/ssm.webp";
import todo from "../assets/images/todo.webp";
import yabao from "../assets/images/yabao.webp";

export const projects: IProject[] = [
  {
    id: 1,
    title: "Сайт строительной организации",
    description:
      "Полнофункциональный сайт строительной организации с ее услугами и админой-панелью для редактирования контента",
    technologies: [
      "React",
      "TypeScript",
      "React-hook-form",
      "Redux",
      "Express",
      "PostgreSQL",
    ],
    githubUrls: [
      {
        id: 1,
        name: "client",
        url: "https://github.com/FiR3N/building-alliance-client",
      },
      {
        id: 2,
        name: "server",
        url: "https://github.com/FiR3N/building-alliance-server",
      },
    ],
    demoUrl: "https://building-alliance-client.vercel.app",
    image: ssm,
  },
  {
    id: 2,
    title: "Yabao",
    description:
      "Yabao - сайт кафе с функцией онлайн-заказа и доставки. Пользователи могут просматривать меню, выбирать блюда и оформлять заказы с удобной корзиной.",
    technologies: [
      "React",
      "TypeScript",
      "React-hook-form",
      "Redux",
      "Express",
      "PostgreSQL",
    ],
    githubUrls: [
      {
        id: 1,
        name: "client",
        url: "https://github.com/FiR3N/building-alliance-client",
      },
      {
        id: 2,
        name: "server",
        url: "https://github.com/FiR3N/building-alliance-server",
      },
    ],
    demoUrl: "https://yabao-client.vercel.app/",
    image: yabao,
  },
  {
    id: 3,
    title: "Task Scheduler",
    description:
      "Task Scheduler - минималистичное ToDo приложение с сохранением задач в localStorage. Позволяет добавлять, редактировать, отмечать как выполненные и удалять задачи.",
    technologies: ["React", "TypeScript"],
    githubUrls: [
      {
        id: 1,
        name: "",
        url: "https://github.com/FiR3N/task_scheduler",
      },
    ],
    demoUrl: "https://task-scheduler-alpha-henna.vercel.app",
    image: todo,
  },
];
