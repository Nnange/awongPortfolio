import { duration } from "@material-ui/core";

let resumeData = {
  imagebaseurl: "https://nnange.github.io/",
  name: "Nnange Awong",
  role: "IT Specialist | AI Enthusiast",
  linkedinId: "Your LinkedIn Id",
  skypeid: "Your skypeid",
  roleDescription:
    " I like dabbling in various parts of frontend/backend development and like to learn about new technologies, write technical articles or simply play games in my free time.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/awong-nnange/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/Nnange",
      className: "fa fa-github",
    },
    {
      name: "skype",
      url: "https://www.facebook.com/nnange.awong/",
      className: "fa fa-facebook",
    },
  ],
  aboutme:
    "I hold a BSc in Communication and Information Engineering and am currently pursuing an MSc in Information Engineering and Computer" + 
    "Science at Rhein-Waal University of Applied Sciences. " + 
    "My background blends communication technologies with advanced computing, equipping me with a solid foundation in both fields. "+
    "Furthermore, I am self-taught Full Stack Web Developer, currently diving deeper into cloud engineering and IT system operations. "+
    "I believe that to be successful in life, one needs to be obsessive about their dreams and keep working towards them.",
    /*I am passionate about developing innovative solutions at the intersection of these disciplines */
  address: "Duisburg, Germany",
  website: "https://www.nnangedev.online",
  education: [
    {
      UniversityName: "Rhein-Waal University of Applied Sciences",
      specialization: "Information Engineering and Computer Science (Msc)",
      MonthOfPassing: "Sept 2024",
      YearOfPassing:  "present",
      duration: "Ongoing",
      Achievements:   "• Present",
    },
    {
      UniversityName: "Rhein-Waal University of Applied Sciences",
      specialization: "Communication and Information Engineering (Bsc)",
      MonthOfPassing: "Oct 2018",
      YearOfPassing:  "Aug 2024",
      duration: "6 years",
      Achievements:   "Bsc Communication and Information Engineering",
    },
    {
      UniversityName: "Saint Joseph College Sasse, Buea (Cameroon)",
      specialization: "High School Education",
      MonthOfPassing: "Sept 2014",
      YearOfPassing: "June 2016",
      duration: "2 years",
      Achievements: "• 5 Subjects Cameroon GCE Advance Level Certificate (Abitur)",
    },
    {
      UniversityName: "Saint Joseph College Sasse, Buea (Cameroon)",
      specialization: "Secondary School Education",
      MonthOfPassing: "Sept 2009",
      YearOfPassing: "June 2014",
      duration: "5 years",
      Achievements: "• 11 Subjects Cameroon GCE Ordinary Level Certificate",
    },
  ],
  
  work: [
    {
      CompanyName: "Amadeus Leisure IT GmbH",
      specialization: "Working Student in Software Development",
      MonthOfLeaving: "May 2023",
      YearOfLeaving: "present",
      duration: "1 yr 5 mos +",
      Tasks1: "• Developed and maintained scalable web applications using Angular, Svelte kit, and Node.js, improving application performance and user engagement.",
      Tasks2: "• Collaborated with senior developers and cross-functional teams, participating in code reviews, and providing constructive feedback, which enhanced the overall code quality.",
      Tasks3: "• Implemented unit tests and end-to-end tests using Jest and Cypress.",
      Tasks4: "• Managed version control using Git, maintaining a clean and organized codebase, and facilitating smooth collaboration among team members.",
      Tasks5: "• Contributed to the documentation of technical specifications and user guides, aiding in knowledge transfer.",
      Tasks6: "• Participated in Agile ceremonies such as daily stand-ups, sprint planning, and retrospectives, ensuring effective communication and continuous improvement within the team.",
      Tasks7: "• Working on the Continuous Integration / Continuous Delivery process",
    },
    {
      CompanyName: "DKB Code Factory GmbH",
      specialization: "IT System Administrator in DevOps Team",
      MonthOfLeaving: "April 2022",
      YearOfLeaving: "Aug 2021",
      duration: "5 mos",
      Tasks1: "• Troubleshooting and supporting existing IT systems (cloud and on-premises)",
      Tasks2: "• Installing and configuring software and hardware",
      Tasks3: "• Set up accounts and workstations",
      Tasks4: "• Working on the Continuous Integration / Continuous Delivery process",
      Tasks5: "• Enhancing our highly accessible platform while using the latest technologies like AWS, Kubernetes, Ansible, Docker",
      Tasks6: "• Setup and maintaining MacOS/Linux/Windows hardware",
      Tasks7: "• Managing Microsoft Outlook accounts",
      Tasks8: "• Proactively identify and address new requirements and potential problems",
    },
    {
      CompanyName: "Curawork UG Bielefeld, Germany",
      specialization: "Web development",
      MonthOfLeaving: "April 2021",
      YearOfLeaving: "Sep 2021",
      duration: "6 mos",
      Tasks1: "• Frontend development of the UI and the UX through design implementation of the various features of the Curawork platform.",
      Tasks2: "• Ensuring that data is managed and processed securely.",
      Tasks3: "• Support the development, optimization and implementation of the platform with its features.      ",
      Tasks4: "• Creation of the UI with the design templates already available on figma and also ensuring good scaling for different screen sizes using a variety of programming Languages such as Javascript, Bootstrap, HTML and CSS.",
      Tasks5: "• Working also on the implementation of some backend features using PHP Laravel.",
      Tasks6: "• Collaborating in the planning and implementation of projects.",
      Tasks7: "• Contributing ideas in a team as an IT mastermind also taking responsibility for the front-end architecture.",
    },
    {
      CompanyName: "MTN Telecommunication Buea, Cameroon",
      specialization: "Working Student in Web development",
      MonthOfLeaving: "Mar 2017",
      YearOfLeaving: "Jan 2018",
      duration: "11 mos",
      Tasks1:
      "• Developing client websites using a variety of programming languages such as Javascript, React, HTML, CSS etc.",
      Tasks2:
      "• Multi-project management and development with the use of agile methodology.",
      Tasks3:
      "• Develop, design and code front/back end solutions in a variety of languages (React, Node.js, Express etc.) including dynamic elements.",
      Tasks4:
      "• Maintained responsibility for the execution of routine backups and test disaster recovery protocols",
      Tasks5:
      "• Assisted in the troubleshooting and resolution of any IOS issues on Apple Devices and as well as other devices in the company.",
      Tasks6:
      "• Worked in a dynamic development team, reporting directly to creative director.",
      Tasks7:
      "• Was an integral part of a scrum team in MTN initiative and support the analysis and documentation of business requirements and processes.",
      Tasks8:
      "• Performed regular upgrades to ensure the ongoing security and efficiency of company software and systems.",
    },
    {
      CompanyName: "Institute of Geology and Mining Research",
      specialization: "Intern Assistant / Information Technology Assistant",
      MonthOfLeaving: "Jun 2016",
      YearOfLeaving: "Sep 2016",
      duration: "4 mos",
      Tasks1: "• Coordinating with different departments to provide support and documentation for IT processes.",
      Tasks2: "• Providing technological support to include hardware and software troubleshooting.",
      Tasks3: "• Assisting with IRGM website content maintenance.",
      Tasks4: "• Creating technical specifications, operating procedures and other support documentation for technology stakeholders.",
      Tasks5: "• Performed other IT related duties as assigned on request by the IT department.",
    },
    
  ],
  skillsDescription: "Your skills here",
  skills: [
    {
      skillname: "HTML5",
    },
    {
      skillname: "CSS",
    },
    {
      skillname: "Javascript",
    },
    {
      skillname: "Reactjs",
    },
    {
      skillname: "Java",
    },
  ],
  portfolio: [
    {
      name: "Amazon-Clone",
      description:
        "This is a fully functional commercial app with also the payment functionality fully enabled. The back-end was done with firebase and Redux, the frontend with React, HTML, and CSS. Stripe helped in processing payments. The link below takes you to the project.",
      imgurl:"https://www.iihglobal.com/wp-content/uploads/2019/09/Amazon-Clone.jpg",
      projectImg: "https://nnange.github.io/Amazon-Clone/",
    },
    {
      name: "WhatsApp-Clone",
      description: "This is a demo or clone of whatsapp. It requires a google account for login and user authentication. The back end of this build was done with firebase but the hosting with github. Also, the react context API (Redux) was very helpful in accomplishing this app.",
      imgurl: "https://www.tutorialxiaomi.com/wp-content/uploads/2018/07/whatsapp-clone.jpg",
      projectImg: "https://nnange.github.io/WhatsApp-Clones/",
    },
    {
      name: "Spotify-Clone",
      description: "This is the Spotify-clone. This build was a tricky one but it has a display of the weekly discovering playlist. The react context API (Redux) came in handy together with Spotify API. A Spotify account will be needed for Login and also accompanied by user authentication.",
      imgurl: "https://importanceofspotifyclone.weebly.com/uploads/4/6/9/2/46920489/8679033.jpg?459",
      projectImg: "https://nnange.github.io/spotify-clone/",
    },
    {
      name: "Netflix-Clone",
      description: "",
      imgurl: "https://merehead.com/blog/wp-content/uploads/Netflix.jpg",
      projectImg: "https://nnange.github.io/netflix-clone/",
    },
    {
      name: "New Project",
      description: "mobileapp",
      imgurl: "",
      projectImg: "",
    },
  ],
  testimonials: [
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
  ],
};

export default resumeData;
