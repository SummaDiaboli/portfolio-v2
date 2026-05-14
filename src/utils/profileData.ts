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
		"Senior Fullstack Engineer specializing in high-performance web applications, with a track record of shipping production systems across e-commerce, civic tech, and AI/ML domains.",
	email: "salimabdu008@gmail.com",
	phone: "+46 76 957 7669",
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
			"Improved render performance on high-volume order pages handling 10,000+ unpaginated records by implementing ag-grid with useMemo caching and session storage, reducing load times significantly for end users.",
			"Established frontend testing standards across the Next.js platform introducing unit and integration tests that improved code maintainability and reduced regression bugs.",
			"Rebuilt the order creation and editing flow from scratch under a tight deadline, resulting in 70% improved customer satisfaction ratings.",
			"Architected and deployed a shared AI chatbot package across two architecturally different platforms using a private npm registry and CSS-in-JS, reducing duplication and establishing a single source of truth.",
		],
	},
	{
		company: "National Center for AI and Robotics",
		role: "Software Engineer",
		link: "https://ncair.nitda.gov.ng/",
		description:
			"Led Python and Machine Learning workshops for 100+ engineers at Nigeria's national AI agency, and built an ML-powered ailment detection system exhibited at Digital Nigeria 2023, designed to cut clinical diagnosis time from hours to minutes.",
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
			"Trained 100+ members in Machine Learning and Python programming through engaging workshops.",
			"Developed innovative applications using machine learning frameworks like TensorFlow.",
			"Led development of an ML-powered ailment detection system that reduced diagnosis time from hours to minutes.",
		],
	},
	{
		company: "Freelance",
		role: "Fullstack Web Developer",
		description:
			"Delivered 20+ full-stack products across finance, healthcare, and NGO sectors with an 80% client satisfaction rate, taking sole ownership of architecture, backend APIs, mobile builds, and deployment for each client.",
		duration: { from: new Date("2022-9"), to: new Date("2023-7") },
		languages: [
			"Next.js",
			"React",
			"Astro",
			"Svelte",
			"Typescript",
			"React Native",
			"Express.js",
			"PostgreSQL",
			"TailwindCSS",
		],
		bulletPoints: [
			"Delivered 20+ full-stack web applications across finance, healthcare and NGO sectors using Next.js, Node.js and React Native, maintaining an 80% client satisfaction rate.",
			"Built and deployed complete products independently, from backend APIs with Node.js and PostgreSQL to mobile applications with React Native, taking full ownership of architecture and delivery.",
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
