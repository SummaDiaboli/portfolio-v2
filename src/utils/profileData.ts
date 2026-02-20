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
		"Results-driven Fullstack Engineer with a passion for crafting innovative, scalable, and secure software solutions",
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
		"Node.js",
		"Dart",
		"Python",
		"Go",
		"HTML & CSS",
	],
	libraries: [
		"React",
		"Next.js",
		"React Native",
		"TailwindCSS",
		"Flutter",
		"Express.js",
		"Nestjs",
		"Jest",
	],
	tools: [
		"PostgreSQL",
		"MySQL",
		"SQLite",
		"Firebase",
		"GraphQL",
		"Hasura",
		"Git",
		"GitHub",
		"Bitbucket",
		"Supabase",
		"Vercel",
		"Heroku",
		"AWS",
		"Jira",
		"Confluence",
	],
	// programmingLanguages: [
	// 	"Typescript",
	// 	"Javascript",
	// 	"Dart",
	// 	"Rust",
	// 	"Go",
	// 	"Python",
	// 	"PostgreSQL",
	// ],
	// libraries: [
	// 	"React",
	// 	"Next.js",
	// 	"React Native",
	// 	"TailwindCSS",
	// 	"Flutter",
	// 	"Node.js",
	// 	"Express.js",
	// 	"Jest",
	// ],
	// tools: [
	// 	"Hasura",
	// 	"Firebase",
	// 	"Git",
	// 	"GitHub",
	// 	"Bitbucket",
	// 	"Supabase",
	// 	"Vercel",
	// 	"Netlify",
	// 	"Jira",
	// 	"Confluence",
	// ],
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
			"Collaborated with international, cross-functional teams to deliver high-quality e-commerce solutions. My role focused on leveraging Next.js to optimize performance, resolve critical client-facing issues, and build scalable, user-friendly interfaces.",
		languages: ["Typescript", "Javascript", "React", "Next.js", "Material UI"],
		bulletPoints: [
			"Engineered and delivered high-quality frontend solutions in collaboration with globally distributed, cross-functional teams.",
			"Actively participated in a full agile development lifecycle, including daily stand-ups, sprint planning, and retrospectives to ensure project alignment.",
			"Architected and developed scalable, user-friendly e-commerce interfaces using Next.js, driving client engagement and conversion.",
			"Identified and resolved complex frontend performance bottlenecks, achieving significant improvements in website speed and user experience.",
			"Rapidly diagnosed and addressed critical, high-impact issues for e-commerce clients, ensuring business continuity and minimizing downtime.",
			"Applied a deep understanding of e-commerce principles (UX, payment gateways, catalog management) to deliver tailored solutions.",
			"Authored and maintained robust unit and integration tests, enhancing code quality, maintainability, and early defect detection.",
			"Utilized Jira and Confluence for transparent task management and comprehensive documentation, ensuring project alignment.",
		],
	},
	{
		company: "National Center for AI and Robotics",
		role: "Software Engineer",
		link: "https://ncair.nitda.gov.ng/",
		description:
			"Led Python and Machine Learning workshops, developed innovative applications with TensorFlow, and collaborated directly with the National Director on strategic national projects.",
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
			"Led successful workshops and training sessions on Machine Learning and Python, fostering a culture of continuous learning within the organization.",
			"Developed and deployed innovative applications using ML frameworks like TensorFlow to drive practical solutions to complex problems.",
			"Collaborated directly with the National Director to strategize and execute high-impact projects aligned with organizational goals.",
		],
	},
	{
		company: "Freelance",
		role: "Fullstack Web Developer",
		description:
			"Engineered and deployed full-stack (MERN/PERN) web and mobile applications for a diverse range of clients, focusing on user-centric design and scalability.",
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
			"Built and deployed scalable, user-centric frontend applications using Next.js, React, and Vercel.",
			"Architected robust RESTful APIs using Node.js and Express to power complex e-commerce platforms.",
			"Developed and delivered native-quality mobile applications for both iOS and Android using React Native.",
			"Designed and managed PostgreSQL databases with Supabase, ensuring efficient and secure data storage for e-commerce applications.",
		],
	},
	{
		company: "3.14 Limited",
		role: "Fullstack Web Developer - Contract",
		description:
			"Developed and deployed a user-friendly React application for a smart home fuel management system, integrating with live IoT device data via a custom API.",
		link: "https://314ltd.com/",
		duration: { from: new Date("2022-7"), to: new Date("2022-9") },
		languages: ["Typscript", "Firebase", "React", "TailwindCSS", "Node.js"],
		bulletPoints: [
			"Built a robust and user-friendly smart home management application using React and TailwindCSS.",
			"Integrated the application with Firebase for backend services, managing real-time data and user authentication.",
			"Engineered an integration with the company's internal API to retrieve and display live data from connected smart devices.",
			"Deployed the web application for internal use via Firebase Hosting, ensuring high availability and accessibility.",
		],
	},
	{
		company: "Yiaga Africa",
		role: "Fullstack Web Developer - Intern",
		link: "https://yiaga.org/",
		description:
			"Developed a public-facing platform to enhance political transparency in Nigeria, featuring D3.js data visualizations and legislative tracking via a Hasura GraphQL backend.",
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
			"Built a dynamic, high-performance web application using React and Next.js.",
			"Implemented interactive data visualizations, including a map of Nigeria, using D3.js to communicate complex data effectively.",
			"Architected the backend infrastructure using Hasura GraphQL, connected to a Heroku-deployed PostgreSQL database.",
			"Wrote Python scripts to extract, transform, and load (ETL) data from various sources to populate the backend.",
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
			"Built a lightweight, high-performance frontend for a social media platform using Preact.",
			"Led the development of a scalable Node.js backend, designing the API and managing data flow.",
			"Configured and managed Firebase services for scalable media asset storage.",
			"Integrated all frontend and backend components and deployed the full application to production on Heroku.",
		],
	},
	{
		company: "Mercy Corps",
		link: "https://nigeria.mercycorps.org/",
		role: "Mobile Application Developer",
		description:
			"Developed and deployed a Flutter-based mobile application for users in rural Northern Nigeria, featuring social feeds, surveys, and translation capabilities.",
		duration: { from: new Date("2019-6"), to: new Date("2019-9") },
		languages: ["Dart", "Flutter", "Firebase", "Pollfish"],
		bulletPoints: [
			"Built and delivered a high-quality internal mobile application using Flutter, adhering to all project specifications.",
			"Integrated the organization's live Twitter feed to provide users with timely social media updates.",
			"Collaborated closely with the project manager in an agile environment to refine and iterate on app features based on user needs.",
			"Implemented the Pollfish SDK to deliver in-app poll and survey features, enabling valuable user feedback.",
			"Successfully deployed and supported the application in rural locations, addressing specific regional challenges like low connectivity.",
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
