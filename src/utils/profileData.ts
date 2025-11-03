type ResumeProps = {
	role: string;
	company: string;
	duration: {
		from: Date;
		to: Date | string;
	};
	link?: string;
	description: string;
	languages: string[];
	bulletPoints: string[];
};

type PersonalDetailsProps = {
	name: string;
	brief: string;
	email: string;
	phone: string;
	githubLink: string;
	portfolioLink: string;
	linkedInLink: string;
};

type SkillsProps = {
	programmingLanguages: string[];
	libraries: string[];
	tools: string[];
};

type EducationProps = {
	name: string;
	major: string;
};

const personalDetails: PersonalDetailsProps = {
	name: "Salim Hussaini",
	brief:
		"Experienced fullstack software engineer focused on building accessible products for the web",
	email: "salimabdu008@gmail.com",
	phone: "+(46) 769577669",
	githubLink: "https://github.com/SummaDiaboli/",
	portfolioLink: "salimhussaini.dev",
	linkedInLink: "https://www.linkedin.com/in/salim-hussaini-059a33108/",
};

const skills: SkillsProps = {
	programmingLanguages: [
		"Typescript",
		"Javascript",
		"Dart",
		"Rust",
		"Go",
		"Python",
		"PostgreSQL",
	],
	libraries: [
		"React",
		"Next.js",
		"React Native",
		"TailwindCSS",
		"Flutter",
		"Node.js",
		"Express.js",
		"Jest",
	],
	tools: [
		"Hasura",
		"Firebase",
		"Git",
		"GitHub",
		"Bitbucket",
		"Supabase",
		"Vercel",
		"Netlify",
		"Jira",
		"Confluence",
	],
};

const resume: ResumeProps[] = [
	{
		company: "NEXT BASKET",
		role: "Senior Frontend Developer",
		link: "https://nextbasket.com/",
		duration: {
			from: new Date("2024-6"),
			to: new Date("2025-8"),
		},
		description:
			"Worked with senior teams to deliver high-quality e-commerce solutions. Leveraged cutting-edge technologies like Next.js to optimize performance, address critical issues, and deliver tailored solutions that met our clients' needs.",
		languages: ["Typescript", "Javascript", "React", "Next.js", "Material UI"],
		bulletPoints: [
			"Collaborated with cross-functional teams located in various time zones to deliver high-quality frontend solutions.",
			"Contributed to an agile development process, actively participating in daily stand-ups, sprint planning, and retrospectives to ensure project alignment and progress.",
			"Leveraged Next.js and other cutting-edge frontend technologies to develop scalable, user-friendly interfaces that drive engagement and conversion for e-commerce clients.",
			"Identified and resolved complex frontend performance bottlenecks, resulting in significant improvements in website speed and user experience.",
			"Demonstrated problem-solving skills by rapidly addressing critical issues impacting high-profile clients, minimizing downtime and ensuring business continuity.",
			"Developed a deep understanding of e-commerce principles and best practices, including user experience, payment gateways, and product catalog management, to deliver tailored solutions for clients.",
			"Implemented robust unit and integration tests for the frontend codebase, ensuring code quality, maintainability, and early detection of defects.",
			"Effectively collaborated with team members using Jira to track and manage tasks, ensuring timely completion and efficient project execution. Maintained comprehensive project documentation using Confluence, promoting knowledge sharing and transparency within the team.",
		],
	},
	{
		company: "National Center for AI and Robotics",
		role: "Software Developer",
		link: "https://ncair.nitda.gov.ng/",
		description:
			"Led ML/Python workshops, developed innovative ML applications, and collaborated on strategic projects.",
		duration: { from: new Date("2023-8"), to: new Date("2024-5") },
		languages: [
			"Flutter",
			"Typescript",
			"React",
			"Nodejs",
			"Python",
			"Tensorflow",
		],
		bulletPoints: [
			"Successfully led workshops and training sessions on Machine Learning and Python programming, fostering a culture of continuous learning and development within the organization.",
			"Demonstrated expertise in developing innovative applications utilizing machine learning frameworks like TensorFlow, driving practical solutions to complex problems.",
			"Collaborated closely with the National Director to strategize and develop impactful projects that aligned with the organization's goals and contributed to its overall success.",
		],
	},
	{
		company: "Freelance",
		role: "Fullstack Web Developer",
		description:
			"Delivered accessible and robust applications for a wide array of projects for public facing businesses.",
		duration: { from: new Date("2022-9"), to: new Date("2023-7") },
		languages: [
			"Next.js",
			"React",
			"Typescript",
			"React Native",
			"Express.js",
			"PostgreSQL",
			"TailwindCSS",
		],
		bulletPoints: [
			"Demonstrated expertise in full-stack development by successfully building and deploying scalable, user-centric front-end applications using Next.js and Vercel.",
			"Developed robust backend APIs using Node.js Express to power complex e-commerce applications, ensuring seamless integration with frontend components.",
			"Utilized React Native to create native-quality mobile applications, delivering exceptional user experiences across iOS and Android platforms.",
			"Designed and implemented PostgreSQL databases using Supabase, ensuring efficient data storage and retrieval for e-commerce applications.",
		],
	},
	{
		company: "3.14 Limited",
		role: "Fullstack Web Developer - Contract",
		description:
			"Developed a web application that would make fuel management easier and more accessible for smart home owners.",
		link: "https://314ltd.com/",
		duration: { from: new Date("2022-7"), to: new Date("2022-9") },
		languages: ["Typscript", "Firebase", "React", "TailwindCSS", "Node.js"],
		bulletPoints: [
			"Developed a robust and user-friendly web application using React.",
			"Seamlessly integrated the web application with the Firebase backend, utilizing its robust infrastructure and scalable database to manage data and authentication.",
			"Effectively integrated with the company's API to retrieve and display live data from connected smart devices, providing users with up-to-date information.",
			"Successfully deployed the web application for internal use through Firebase hosting, ensuring easy accessibility and a reliable user experience.",
		],
	},
	{
		company: "Yiaga Africa",
		role: "Fullstack Web Developer - Intern",
		link: "https://yiaga.org/",
		description:
			"Collaborated with the legal and tech teams to create an online platform for sensiting Nigerians about the legislature and making more information about political leaders and bills available.",
		duration: { from: new Date("2021-8"), to: new Date("2021-9") },
		languages: [
			"Typscript",
			"Firebase",
			"Hasura",
			"GraphQL",
			"D3.js",
			"PostgreSQL",
			"Python",
		],
		bulletPoints: [
			"Developed a dynamic web application using React and Next.js, leveraging their powerful features for efficient development and optimized performance.",
			"Created a visually engaging and informative map of Nigeria using D3.js, effectively communicating complex data through interactive visualizations.",
			"Developed a robust backend infrastructure using Hasura GraphQL, seamlessly connecting it to a PostgreSQL database deployed on Heroku to manage data efficiently.",
			"Collaborated with the Head of IT to extract and structure data from various sources using Python, ensuring accurate and reliable data for the backend.",
		],
	},
	{
		company: "Logical Address",
		role: "Fullstack Web Developer",
		description:
			"Developed a social media web platform aimed to bring people together using podcasts and music with a team of fellow students.",
		duration: { from: new Date("2019-9"), to: new Date("2019-12") },
		languages: [
			"Javascript",
			"Typscript",
			"Firebase",
			"Next.js",
			"Preact",
			"Express.js",
			"Cloudinary",
		],
		bulletPoints: [
			"Successfully implemented the frontend product using Preact, leveraging its lightweight and efficient framework for building high-performance web applications.",
			"Led the development of a scalable Node.js backend, ensuring efficient data management and API integration for the application.",
			"Set up and configured Firebase services for media storage, providing a reliable and scalable solution for managing application assets.",
			"Successfully integrated the frontend and backend components, deploying the application to a production environment using Heroku for efficient delivery.",
		],
	},
	{
		company: "Mercy Corps",
		link: "https://nigeria.mercycorps.org/",
		role: "Mobile Application Developer",
		description:
			"Delivered an efficient and accessible social mobile application that would connect people in rural parts of Northern Nigeria and would translate text to a language of their choosing.",
		duration: { from: new Date("2019-6"), to: new Date("2019-9") },
		languages: ["Dart", "Flutter", "Firebase", "Pollfish"],
		bulletPoints: [
			"Successfully developed and implemented an internal mobile application using Flutter, adhering to project specifications and delivering a high-quality user experience.",
			"Integrated the organization's social media feed into the mobile app, leveraging the existing Twitter feed to provide users with relevant and timely updates.",
			"Effectively communicated with the project manager to refine and iterate on mobile app features, ensuring alignment with project goals and user needs.",
			"Implemented poll and survey features using Pollfish, enabling users to actively participate and provide valuable feedback.",
			"Successfully deployed the mobile application in rural locations in Northern Nigeria, addressing the specific needs and challenges of users in these regions.",
		],
	},
];

const education: EducationProps = {
	name: "American University of Nigeria",
	major: "Bachelor of Science in Software Engineering",
};

const interests: string[] = [
	"Sci-Fi/Fantasy Novels",
	"League of Legends",
	"Watching shows with my partner",
];

export const profileData = {
	personalDetails,
	skills,
	resume,
	education,
	interests,
};
