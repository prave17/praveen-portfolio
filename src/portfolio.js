/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Praveen Kumar",
  title: "Hi all, I'm Praveen",
  subTitle: emoji(
    "✨ A passionate Full Stack Developer 🚀 with 7+ years of experience in building scalable web applications using Java, Spring Boot, Angular, and JavaScript."),
  resumeLink:
    "https://drive.google.com/file/d/1rWfUpVw-EVh5A8TU0_QTV0YNRTsTFAhG/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/prave17",
  linkedin: "https://www.linkedin.com/in/praveen-kumar-b3887a159/",
  email: "e.praveenkumar17@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java" // unofficially used; may need custom icon
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf" // not official, but you can replace with icon if using SVG
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js" // fallback, TypeScript icon not in FA; you can add SVG
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Oracle DB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-tools" // symbolic
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "College of Engineering, Guindy, Chennai",
      logo: require("./assets/images/cegLogo.png"), // Add your logo at this path
      subHeader: "Master of Computer Applications",
      duration: "2015 - 2018",
      desc: "Completed post-graduate program with a CGPA of 7.10/10.",
      descBullets: [
        "Specialized in software development and system design"
      ]
    },
    {
      schoolName: "Guru Nanak College, Velachery, Chennai",
      logo: require("./assets/images/gncLogo.png"), // Add your logo at this path
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2012 - 2015",
      desc: "Graduated with a CGPA of 7.0/10.",
      descBullets: [
        "Focused on programming fundamentals and data structures"
      ]
    },
    {
      schoolName: "Loyola Matriculation Higher Secondary School, Chennai",
      logo: require("./assets/images/loyolaLogo.png"), // Add your logo at this path
      subHeader: "Higher Secondary School",
      duration: "2011 - 2012",
      desc: "Completed HSC with a CGPA of 7.10/10.",
      descBullets: [
        "Studied Mathematics, Physics, and Computer Science stream"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (Angular, HTML5, CSS3, TypeScript)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend (Spring Boot, Spring Security, Spring Batch)",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming (Java, JavaScript)",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud & DevOps (AWS, Jenkins, Docker)",
      progressPercentage: "75%"
    },
    {
      Stack: "Databases (Oracle DB, PostgreSQL, Gemfire)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};


// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "NielsenIQ",
      companylogo: require("./assets/images/nielseniqLogo.png"),
      date: "July 2024 – Present",
      desc: "Working as a Senior Full Stack Developer contributing to the design and development of web-based solutions.",
      descBullets: [
        "Leading front-end development using Angular and TypeScript",
        "Integrating backend services built with Spring Boot",
        "Collaborating across hybrid teams in a Test & Learn environment"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Accenture",
      companylogo: require("./assets/images/accentureLogo.png"),
      date: "March 2022 – July 2024",
      desc: "Involved in full stack development and modernization of enterprise applications.",
      descBullets: [
        "Worked extensively on Angular and Gemfire integration",
        "Implemented scalable APIs using Spring Boot",
        "Contributed to DevOps workflows and cloud deployments"
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Flatirons Solutions",
      companylogo: require("./assets/images/flatironsLogo.png"),
      date: "May 2019 – March 2022",
      desc: "Worked on digital publishing platforms and content management systems.",
      descBullets: [
        "Developed modules using AngularJS and Java",
        "Maintained legacy systems and migrated them to modern frameworks"
      ]
    },
    {
      role: "Software Engineer",
      company: "Sysbiz Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/sysbizLogo.png"),
      date: "June 2018 – May 2019",
      desc: "Worked on Java-based enterprise applications.",
      descBullets: [
        "Developed UI using Vaadin framework",
        "Implemented business logic with Spring Framework"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "AWS Certified Developer – Associate",
      subtitle:
        "Earned the AWS Certified Developer – Associate certification in December 2023, validating cloud proficiency and application development on AWS.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/b08cbe52-4c6e-4d07-a278-09940f91e43f" // Replace with actual if available
        }
      ]
    },
    {
      title: "ACE Award - Accenture",
      subtitle:
        "Received the ACE (Accenture Celebrates Excellence) Award in December 2022 for outstanding performance and contributions to project delivery.",
      image: require("./assets/images/accentureAward.png"),
      imageAlt: "Accenture Logo",
      footerLink: [
        {
          name: "Award Announcement",
          url: "" // Add if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+91 7845418546",
  email_address: "e.praveenkumar17@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
