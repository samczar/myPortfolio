const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Sam Anyanka",
        description: "I am a Senior Full Stack Developer with over 10 years of experience specializing in web and mobile solutions. My expertise spans a wide range of technologies, including React.js, Node.js, React Native, and Generative AI applications. I am passionate about delivering scalable, high-quality software that drives business results and enhances user experiences.",
        role: "Senior Full Stack Developer",
        photo: "samCzar.png",
        email: "sam.anyanka@gmail.com",
    },

    // ============ SOCIAL LINKS ============
    socials: {
        twitter: null,
        github: "https://github.com/samczar",
        linkedin: "https://linkedin.com/in/sam-anyanka",
        instagram: null,
        facebook: null,
    },

    // ============ PROJECTS ============
    projects: [
        {
            title: "GameZovah",
            description: "A live management system for E-Sport tournaments, events, and payments, with over 1,500 active users and optimized for cost-effective cloud infrastructure.",
            technologies: "Next.js, Redux, Node.js, React Native, PostgreSQL, Redis, Docker",
            github: null,
            link: "https://gamezovah.com"
        }
    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "Middlesex University, UK",
            degree: "Bachelor of Science in Computer Science and Systems Engineering",
            duration: "August 2015 - July 2017",
            image: "/logos/mdx.png",
        },
        {
            school: "IPMC, Ghana",
            degree: "Diploma in Hardware and Networking",
            duration: "October 2009 - September 2011",
            image: "/logos/ipmc.jpeg"
        },
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "Data Application Engineer",
            company: "Spark Limited",
            duration: "January 2024 – Present",
            image: "/logos/spark.jpeg",
            descriptions: [
                "Designed and implemented SparkGPT, a Generative AI application used by 8,000+ users across departments.",
                "Optimized CI/CD pipelines using Docker, Kubernetes, and Terraform.",
                "Integrated LLMs and Snowflake vectorization to enhance AI-driven insights for business intelligence."
            ],
            technologies: ["Next.js", "TypeScript", "Azure", "Redis", "Cosmos DB", "Kubernetes", "Docker", "Snowflake"]
        },
        {
            position: "Software Specialist",
            company: "ASB Bank",
            duration: "November 2020 – December 2023",
            image: "/logos/asb.jpeg",
            descriptions: [
                "Led cross-department Agile initiatives to improve team collaboration.",
                "Developed scalable frontend applications using React.js, Redux, and Jest.",
                "Maintained a secure in-house NPM repository to enhance development workflows.",
                "Streamlined deployments through optimized CI/CD pipelines in Azure."
            ],
            technologies: ["React.js", "Redux", "Azure", "TypeScript", "C#", ".NET", "MSSQL"]
        },
        {
            position: "Lead Full-Stack Developer",
            company: "Tracta Limited",
            duration: "January 2020 – August 2020",
            image: "/logos/tracta.png",
            descriptions: [
                "Delivered full-stack solutions for high-profile clients like John Deere, focusing on SaaS platforms.",
                "Improved application performance with reusable code practices and Webpack.",
                "Ensured timely delivery of projects by championing Agile practices."
            ],
            technologies: ["React.js", "Node.js", ".NET Core", "Webpack", "PHP", "Laravel"]
        },
        {
            position: "Frontend Developer",
            company: "Betsson Group",
            duration: "April 2019 – December 2019",
            image: "/logos/betsson.jpeg",
            descriptions: [
                "Optimized mobile app performance, reducing load times by 50%.",
                "Modernized legacy applications with Vue.js and TypeScript.",
                "Developed an I-Gaming application for Germany's horse racing audience."
            ],
            technologies: ["Vue.js", "JavaScript", "TypeScript", "Git Bucket", "Bamboo CI/CD"]
        },
        {
            position: "Lead Developer",
            company: "Zheta International",
            duration: "July 2017 – September 2018",
            image: "/logos/zheta.png",
            descriptions: [
                "Increased web and mobile traffic by 50% through mobile-first development.",
                "Delivered REST APIs using Node.js and modern tools.",
                "Developed mobile applications using Ionic and Cordova with PHP ModX backend integration."
            ],
            technologies: ["Node.js", "Ionic", "Cordova", "PHP", "ModX", "On-premises/Cloud Servers"]
        },
        {
            position: "Web Developer",
            company: "Gratia Spiral Empire",
            duration: "May 2012 – September 2017",
            image: "/logos/gse.png",
            descriptions: [
                "Built scalable web applications using CSS3, HTML5, and Bootstrap.",
                "Developed single-page applications (SPA) with Angular.js.",
                "Collaborated with UI/UX designers to deliver user-friendly solutions."
            ],
            technologies: ["CSS3", "HTML5", "Bootstrap", "Angular.js", "WordPress", "PHP"]
        }
    ],

    // ============ CERTIFICATES ============
    certificates: [],

    // ============ CONTACT ============
    contact: {
        title: "Get in Touch",
        description: "Feel free to reach out to me via email or LinkedIn for inquiries or collaboration opportunities.",
    },

    // ============ FOOTER ============
    footer: `© ${new Date().getFullYear()} Sam Anyanka. All Rights Reserved`
};

export default info;
