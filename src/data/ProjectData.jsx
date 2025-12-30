import Oftac from "../assets/oftac.png";
import PortfolioOne from "../assets/portfolio-one.png";
import newPortfolio from "../assets/new-portfolio.png";


const ProjectData = [
    {
        imgUrl: Oftac, 
        alt: "oftac.org image",
        title: "OFTAC.ORG - UGANDA",
        description: "A react App for Organization For Transforming African Communities, a small refugee led organization in Kyangwali Refugee camp",
        techStack : [ "JavaScript", "HTML", "CSS", "React", "Material UI", "Bootstrap5", "Nodejs", "Expressjs", "MongoDB", "Render"],
        demoUrl: "https://oftac.onrender.com/#/",
        codeUrl: "https://github.com/nandweza/oftac"
    },
    {
        imgUrl: Oftac, 
        alt: "oftac.org image",
        title: "OFTAC.ORG API",
        description: "API for Organization For Transforming African Communities built with nodejs, express, and typescript.",
        techStack : [ "Nodejs", "Expressjs", "Mongoose", "nodemon", "bcrypt", "jwt-authentication", "multer", "TypeScript", "MongoDB", "nodemailer", "ts-node"],
        demoUrl: "https://oftac.onrender.com/#/",
        codeUrl: "https://github.com/nandweza/oftac-backend"
    },
    {
        imgUrl: PortfolioOne, 
        alt: "my first portfolio home page image",
        title: "First Porfolio Website",
        description: "My first personal portfolio website built with html5, CSS3, and Bootstrap5.",
        techStack : [ "HTML", "CSS", "Bootstrap5", "Github Pages",],
        demoUrl: "https://nandweza.github.io/allan/",
        codeUrl: "https://github.com/nandweza/allan"
    },
    {
        imgUrl: newPortfolio, 
        alt: "new portfolio homepage image",
        title: "My Porfolio React App",
        description: "My Personal portfolio website built with React + Vite, showcases my projects and skills.",
        techStack : [ "JavaScript", "HTML", "CSS", "React", "Bootstrap5", "Material UI", "Vite"],
        demoUrl: "#",
        codeUrl: "https://github.com/nandweza/portfolio"
    },
    // {
    //     imgUrl: Go, 
    //     alt: "GO USETECH",
    //     title: "GO USETECH home page image",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     techStack : [ "Javascript", "ejs", "CSS3", "Git", "Nodejs", "Expressjs", "oauth2", "Mongoose", "MongoDB"],
    //     demoUrl: "#",
    //     codeUrl: "https://github.com/nandweza/Go-use_Tech"
    // },
    // {
    //     imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.unsell.design%2Fwp-content%2Fuploads%2F2023%2F08%2F633617353_Template-Featured-image.jpg&f=1&nofb=1&ipt=0b2108507802b23e51b2c8cf035982908e0897693f4c66c69860a75741f3d58f", 
    //     alt: "project two img",
    //     title: "Project Two",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     techStack : [ "Python", "HTML", "Sass", "Git", "Flask", "React", "JavaScript", "TypeScript", "MongoDB"],
    //     demoUrl: "#",
    //     codeUrl: "#"
    // },  
];

export default ProjectData;
