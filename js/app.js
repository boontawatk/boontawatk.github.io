var resumeRawData = {
  name: "Boontawat",
  surname: "Kumpiroj",
  profilePic: "img/profile.jpg",
  intro: "I'm a multipotentialolie who interest in cutting-edge technology.",
  interestRoles: [
    "Full Stack Developer",
    "Backend Developer",
    "Software Engineer",
  ],
  contact: {
    tel: "+6684-018-5358",
    email: "boontawat.k@gmail.com",
    github: "",
    Linkedin: "",
    Location: "Bangkok, Thailand",
  },
  workEx: [
    {
      Location: "HiveGround",
      Roles: "Firmware Developer Intern",
      description: "asfsaf",
    },
    {
      Location: "Mitsubishi Electric Automation Thailand",
      Roles: "Design Engineer",
      description: "asfsaf",
    },
    {
      Location: "First Multitec",
      Roles: "Sales Engineer",
      description: "asfsaf",
    },
  ],
  project: [
    {
      name: "sdaf",
      description: "aweg",
    },
    {
      name: "sdaf",
      description: "aweg",
    },
  ],
  Education : [
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
  ]
};

let resumeData=function(data){
    let self=this;
    self.fullname=ko.computed(function(){
        return data.name+" "+data.surname;
    });
}

ko.applyBindings(new resumeData(resumeRawData));