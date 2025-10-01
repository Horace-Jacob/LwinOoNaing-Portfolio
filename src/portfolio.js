/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lwin's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Lwin Oo Naing Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Lwin Oo Naing",
  logo_name: "LwinOoNaing",
  nickname: "Lwin",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1G9MJjCmtH_DO7PRDEtNCB1OpHZXhe-Hj/view?usp=sharing",
  portfolio_repository: "https://github.com/Horace-Jacob",
  githubProfile: "https://github.com/Horace-Jacob",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Horace-Jacob",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lwin-naing/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:lwinoo.naing.301@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using TypeScript, React-Redux and React Query",
        "⚡ Developing robust application backend using NodeJs, Express, .NET Core and Python",
        "⚡ Creating robust and secure API with REST and GraphQL",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#000000",
            color: "#02569B",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#FFE464",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying sites on cloud platform for the public use",
        // "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and creating animations from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        // {
        //   skillName: "Adobe Illustrator",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        // {
        //   skillName: "Inkscape",
        //   fontAwesomeClassname: "simple-icons:inkscape",
        //   style: {
        //     color: "#000000",
        //   },
        // },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Greenwich",
      subtitle: "B.Sc (Hons) in Computer Science",
      logo_path: "uog_logo.png",
      alt_name: "University of Greenwich",
      duration: "2023 - 2024",
      descriptions: [
        `⚡ Studied Requirement Management, Project, Enterprise Web Development, Mobile Development and HCI.
            Enterprise Web Development was a group project conducted in an Agile manner.`,
        `⚡ A Worked on a team of 7 UOG students to implement student magazine management system using Laravel, HTML, CSS. 
	    My role was database administrator.`,
      ],
      website_link: "https://www.gre.ac.uk/",
    },
    {
      title: "Info Myanmar University",
      subtitle: "HND in Computer Engineering",
      logo_path: "info_logo.png",
      alt_name: "Info Myanmar University",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ Studied Programming fundamentals, Java Enterprise, Data Structures and Algorithms, Web Development and Advanced Maths.",
        // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://infomyanmarcollege.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Advanced React - Meta",
      subtitle: "- Meta Staff",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/55d82aeb31093a02e07a4fc8f865cc8c",
      alt_name: "Meta",
      color_code: "#87B4F8",
    },
    {
      title: "Advanced React For Enterprise: React for senior engineers",
      subtitle: "- Frantz Kati",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-dce5968e-17a1-4001-8f59-6feca6d4382e.pdf",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "React Testing Library with Jest / Vitest",
      subtitle: "- Bonnie Schulkin",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a38ea2d5-d316-4365-b036-9fccc3229ea6.pdf",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "AlgoExpert.io",
      subtitle: "- Clément Mihailescu",
      logo_path: "algoexpert_cover.jpeg",
      certificate_link: "https://certificate.algoexpert.io/AE-6567496c0d",
      alt_name: "AlgoExport.io",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: `
    Advance my skills and knowledge with a focused effort to achieve company-driven objectives. Use technology to solve problems simply and elegantly in a way that will delight customers. Monitor success of these objectives through data-driven techniques.
    `,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Software Engineer",
          company: "Intelance",
          company_url: "https://www.intelance.co.uk/",
          logo_path: "intelance_logo.jpeg",
          duration: "September 2023 - September 2025",
          location: "London, England, UK",
          description: `
            Served as Feature Lead for a Digital Health Platform, overseeing development of both frontend and backend components.
            Designed and implemented intuitive Clinical and Admin Interfaces, optimizing workflows for healthcare professionals.
            Ensured code quality and documented the entire process for future reference.
            `,
          color: "#0879bf",
        },
        {
          title: "Full Stack Software Engineer",
          company: "Yammobots Co., Ltd",
          company_url: "https://yammobots.com/",
          logo_path: "yammobots.png",
          duration: "May 2022 - August 2023",
          location: "7 Mile, Yangon, Myanmar",
          description: `Led development of a unified Cinema Ticket Booking System messenger bot, attracting over 3 million followers and simplifying the booking process across multiple cinemas.
            Engineered a high-volume Facebook Page Management System handling hundreds of thousands of daily messages, streamlining customer service operations for internal clients.`,
          color: "white",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Software Engineer Intern",
          company: "Yammobots Co., Ltd",
          company_url: "https://yammobots.com/",
          logo_path: "yammobots.png",
          duration: "April 2022 - May 2022",
          location: "7 Mile, Yangon, Myanmar",
          description: `Developed a React-based Seafarer Exam website, enhancing accessibility and user
experience for maritime professionals. Implemented robust Authentication and Authorization systems for a Real Estate platform,
ensuring secure user access and data protection`,
          color: "white",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Backend Developer",
          company: "Mizohla",
          company_url: "",
          logo_path: "no_img.png",
          duration: "June 2021 - April 2022",
          location: "Remote",
          description: `
            Spearheaded the implementation of song API for national songs and full text search
capability for better user experience using NodeJS. Resulted in 30% faster and more accurate search results and improved data flow
performance. Made research on machine learning model for real time football match prediction.
            `,
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: `My projects makes use of vast variety of latest technology tools. My best experience is to create full stack projects and 
    deploy them to web servers using cloud infrastructure to make impact for the humanity.`,
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "LinkedInPP-NoBg.png",
    description:
      "I am available on GitHub, LinkedIn and Email. You can message me, I will reply within 24 hours. I can help you with Frontend, Backend and Full Stack Development.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    // title: "Address",
    // subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    // locality: "San Jose",
    // country: "USA",
    // region: "California",
    // postalCode: "95129",
    // streetAddress: "Saratoga Avenue",
    // avatar_image_path: "address_image.svg",
    // location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
