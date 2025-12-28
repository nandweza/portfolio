import {
    FaJs,
    FaJava,
    FaPython,
    FaReact,
    FaBootstrap,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaLinux,
    FaWindows,
    FaCss3,
    FaSass,
    FaTerminal,
    FaMarkdown,
    FaServer,
} from "react-icons/fa";
import {
    SiTypescript,
    SiMongodb,
    SiMysql,
    SiFirebase,
    SiDjango,
    SiFlask,
    SiPostman,
    SiTrello,
    SiExpress,
} from "react-icons/si";

import {
    DiCodeBadge,
    DiHtml5,
    DiHeroku,
} from "react-icons/di";

const SkillsData = [
    //languages
    { name: "JavaScript", category: "code", icon: FaJs },
    { name: "TypeScript", category: "code", icon: SiTypescript, className: "text-primary" },
    { name: "Java", category: "code", icon: FaJava },
    { name: "Python", category: "code", icon: FaPython, className: "text-primary" },

    //frontend
    { name: "React", category: "frontend", icon: FaReact },
    { name: "Bootstrap", category: "frontend", icon: FaBootstrap },

    //backend
    { name: "NodeJS", category: "backend", icon: FaNodeJs },
    { name: "ExpressJS", category: "backend", icon: SiExpress },
    { name: "Django", category: "backend", icon: SiDjango },
    { name: "Flask", category: "backend", icon: SiFlask, className: "text-dark" },

    //databases
    { name: "MongoDB", category: "database", icon: SiMongodb, className: "text-success" },
    { name: "MySQL", category: "database", icon: SiMysql },
    { name: "Firebase", category: "database", icon: SiFirebase },

    //tools
    { name: "Git", category: "tools", icon: FaGitAlt, className: "text-orange" },
    { name: "GitHub", category: "tools", icon: FaGithub, className: "text-dark" },
    { name: "Postman", category: "tools", icon: SiPostman, className: "text-orange" },
    { name: "Trello", category: "tools", icon: SiTrello, className: "text-primary" },

    //os
    { name: "Linux", category: "os", icon: FaLinux, className: "text-dark" },
    { name: "Windows", category: "os", icon: FaWindows },

    // Hosting & Deployment
    { name: "GitHub", category: "hosting", icon: FaGithub, className: "text-dark" },
    { name: "Render", category: "hosting", icon: FaServer },
    { name: "Heroku", category: "hosting", icon: DiHeroku, className: "text-purple" },

    // Frameworks & Libraries
    { name: "React", category: "frameworks", icon: FaReact },
    { name: "Bootstrap", category: "frameworks", icon: FaBootstrap },
    { name: "ExpressJS", category: "frameworks", icon: SiExpress },
    { name: "MySQL", category: "frameworks", icon: SiMysql, className: "text-danger" },

    // Markup & Scripting
    { name: "HTML", category: "markup", icon: DiHtml5, className: "text-danger" },
    { name: "XML", category: "markup", icon: DiCodeBadge },
    { name: "Markdown", category: "markup", icon: FaMarkdown },
    { name: "Bash", category: "scripting", icon: FaTerminal },

    // Styles
    { name: "CSS", category: "stylesheet", icon: FaCss3 },
    { name: "Sass (Familiar)", category: "stylesheet", icon: FaSass },

];

export default SkillsData;
