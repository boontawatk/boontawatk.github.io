var resumeRawData = {
  name: "Boontawat",
  surname: "Kumpiroj",
  profilePic: "img/profile.jpg",
  intro: "\"I'm a multipotentialite who interested in software development, seeking an opportunities to be a Full Stack developer. I'd love to hear any opportunities from your company!\"",
  interestRoles: [
    "Full Stack Developer (MERN stack)",
    "Backend Developer",
    "Software Engineer",
  ],
  contact: {
    tel: "+6684-018-5358",
    email: "boontawat.k@gmail.com",
    github: "",
    Linkedin: "https://www.linkedin.com/in/boontawat-kumpiroj",
    Location: "Bangkok, Thailand",
  },
  workEx: [
    {
      company: "HiveGround",
      role: "Firmware Developer Intern",
      description: "HiveGround is robotic start-up company, I was an intern there for 2 months during summer. They gave me projects to develop firmware of micro-controller for UAV(Drone). I worked with 2 different brands of micro-controller Pixhawk and STM32 which introduce me to software development world. I've learn how micro-controller works in both high-level and low-level. I also learn about software development tools such as VScode, terminal, and Git Version Control",
    },
    {
      company: "Mitsubishi Electric Automation Thailand",
      role: "Design Engineer",
      description: "Mitsubishi Electric Automation Thailand is market-lead motor&pump manufacturer, I worked there for 8 months. My role is Design Engineer in Pump Design team, which has responsibility to design, modify and develop pump for our clients. I worked with fluid mechanics, CAD software, multi-physics simulation software. It's not only my responsibility there, they gave me a job to build their website for the team which introduce me in web development area.",
    },
    {
      company: "First Multitec",
      role: "Sales Engineer",
      description: "First Multitec is sales representative company of machinery in cement & bulk material industry. I worked there for 5 months. My role is to corporate with clients to sell the machine that meet their requirement and contact with suppliers around the world to serve after sales services.",
    },
  ],
  projects: [
    {
      name: "Vitae iure",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam neque eos possimus, amet minima qui? Ipsa corrupti dolor officiis optio aliquam, consequuntur itaque praesentium dignissimos veritatis nam earum consectetur eos!",
    },
    {
      name: "Recusandae",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam neque eos possimus, amet minima qui? Ipsa corrupti dolor officiis optio aliquam, consequuntur itaque praesentium dignissimos veritatis nam earum consectetur eos!",
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
  onlineCourse:[
    {
      courseName:"data science",
      certCredent:"",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam eaque consequatur suscipit itaque adipisci doloremque explicabo nulla natus tempora accusantium, aspernatur neque officia ducimus ipsum quod alias culpa quasi?"
    },
    {
      courseName:"web dev bootcamp",
      certCredent:"",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam eaque consequatur suscipit itaque adipisci doloremque explicabo nulla natus tempora accusantium, aspernatur neque officia ducimus ipsum quod alias culpa quasi?"
    }
  ],
  skills:{
    language:[
      "HTML",
      "CSS",
      "Javascript",
    ],
    technology:[
      "NodeJS",
      "ExpressJS",
      "MongoDB & MongooseJS",
      "KnockOutJS",
      "Bootstrap 4",
      "Semantic UI",
      "Wordpress (Usage)"
    ],
    tools:[
      "VScode",
      "Git version control"
    ]
    ,
    softSkill:[
      "Good Self Learner",
      "Good team player"
    ]
  }
};

let resumeData = function (data) {
  let self = this;
  self.fullname = ko.computed(function () {
    return data.name + " " + data.surname;
  });
  for(key in data){
    self[key]=ko.observable(data[key]);
  }
};

