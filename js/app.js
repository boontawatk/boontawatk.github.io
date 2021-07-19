var resumeRawData = {
  name: "Boontawat",
  surname: "Kumpiroj",
  profilePic: "img/profile.jpg",
  intro:
    "\"I'm a multipotentialite who interested in software development, seeking an opportunities to be a Full Stack developer. I'd love to hear any opportunities from your company!\"",
  interestRoles: [
    "Full Stack Developer",
    "Frontend Developer",
    "Software Engineer",
  ],
  contact: {
    tel: "+6684-018-5358",
    email: "boontawat.k@gmail.com",
    github: "https://github.com/boontawatk",
    Linkedin: "https://www.linkedin.com/in/boontawat-kumpiroj",
    Location: "Bangkok, Thailand",
  },
  workEx: [
    {
      company: "H-lab",
      role: "Frontend Developer (Current Job)",
      description:
        "H-lab is technology based entertainment company, my responsibility are developing web application and mobile application for our clients such as online siminar and realtime event.",
    },
    {
      company: "HiveGround",
      role: "Firmware Developer Intern",
      description:
        "HiveGround is robotic start-up company, I was an intern there for 2 months during summer. They gave me projects to develop firmware of micro-controller for UAV(Drone). I worked with 2 different brands of micro-controller Pixhawk and STM32 which introduce me to software development world. I've learn how micro-controller works in both high-level and low-level. I also learn about software development tools such as VScode, terminal, and Git Version Control",
    },
    {
      company: "Mitsubishi Electric Automation Thailand",
      role: "Design Engineer",
      description:
        "Mitsubishi Electric Automation Thailand is market-lead motor&pump manufacturer, I worked there for 8 months. My role is Design Engineer in Pump Design team, which has responsibility to design, modify and develop pump for our clients. I worked with fluid mechanics, CAD software, multi-physics simulation software. It's not only my responsibility there, they gave me a job to build their website for the team which introduce me in web development area.",
    },
    {
      company: "First Multitec",
      role: "Sales Engineer",
      description:
        "First Multitec is sales representative company of machinery in cement & bulk material industry. I worked there for 5 months. My role is to corporate with clients to sell the machine that meet their requirement and contact with suppliers around the world to serve after sales services.",
    },
  ],
  projects: [
    {
      name: "Activ21",
      description:
        "Mobile Application for online contest, gaining quiz point during event time to win the prize",
      repo: null,
      play: null,
    },
    {
      name: "MOVE - Online Seminar",
      description:
        "Web application for business matching in Thailand film industry and worldwide",
      repo: null,
      play: null,
    },
    {
      name: "Game Night",
      description:
        "Mobile Application for virtual sport online contest with realtime gaming and quiz event to win the prize",
      repo: null,
      play: null,
    },
    {
      name: "Video Streaming(In progress)",
      description:
        "Video Streaming web app to stream real-time video via OBS. This project using Google OAuth to identify user. Technologies used are React, React-Router, Redux",
      repo: "https://github.com/boontawatk/streams",
      play: "#",
    },
    {
      name: "Tic Tac Toe",
      description: "Tic Tac Toe games for two players using React+Hooks",
      repo: "https://github.com/boontawatk/tictactoe",
      play: "https://boontawatk.github.io/tictactoe/",
    },
    {
      name: "Yelp Camp",
      description:
        "Full Stack project in Web Developer Bootcamp course by Colt Steele. Front End technology used is simple HTML, CSS, JS with Bootstrap and EJS template. Back End technology used is Nodejs, Express, MongoDB with RESTful routing and authentication & authorization system.",
      repo: "https://github.com/boontawatk/YelpCamp",
      play: null,
    },
    {
      name: "Exercise Robot",
      description:
        "Desktop robot for tracking you while you're exercising, don't be afraid to getting out of the frame!. This project made with STM32 board to control motor's position and Microsoft Kinect for skeleton tracking.",
      repo: "https://gitlab.com/boontawat.k/exercise-robot/",
      play: null,
    },
  ],
  Education: [
    {
      place: "Chulalongkorn University",
      degree: "B.E.Mechanical Engineering",
      years: "2015-2018",
    },
    {
      place: "Bodindecha(Sing Singhaseni)2 School",
      degree: "Intensive Math Science Program",
      years: "2009-2014",
    },
  ],
  onlineCourse: [
    {
      courseName: "The Web Developer Bootcamp",
      certCredent: "",
      description: "HTML, CSS, JavaScript, Bootstrap, NodeJS, Express, MongoDB",
    },
    {
      courseName: "Modern React with Redux",
      certCredent: "",
      description:
        "React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!",
    },
    {
      courseName: "JavaScript Algorithms and Data Structures Masterclass",
      certCredent: "",
      description:
        "Big O notation, searching algorithm, sorting algorithm, data structure, Dijkstra's algorithm",
    },
    {
      courseName: "JavaScript: Understanding the Weird Parts",
      certCredent: "",
      description: "JavaScript in details",
    },
    {
      courseName: "JavaScript Design Patterns",
      certCredent: "",
      description: "Organizing code, MVO concept,",
    },
    
  ],
  skills: {
    language: {
      main: ["HTML", "CSS", "Javascript"],
      optional: ["Python", "C++"],
    },
    technology: [
      "React & Redux",
      "React Native",
      "NodeJS",
      "ExpressJS",
      "MongoDB & MongooseJS",
      "MySQL",
      "Wordpress (User)",
    ],
    tools: [
      "VScode",
      "Git version control",
      "Linux terminal",
      "Docker for development phase",
    ],
    softSkill: ["Good Self Learner", "Good team player", "TOEIC SCORE: 745"],
  },
};

let resumeData = function (data) {
  let self = this;
  self.fullname = ko.computed(function () {
    return data.name + " " + data.surname;
  });
  for (key in data) {
    self[key] = ko.observable(data[key]);
  }
};
