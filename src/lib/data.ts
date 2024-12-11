
export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    // {
    //     name: "Experience",
    //     hash: "#experience",
    // },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;


export const projectsData = [
    {
        title: "ChatApp",
        description:
            "Chat application built with nextjs and pusher. It uses Postgress as a database and styled with Tailwindcss.",
        tags: ["Postgress", "Next.js", "Pusher", "Tailwind", "TypeScript"],
        imageUrl: '/chatme.png',
        projectUrl: 'https://talknow.pl/',
        external: false,
        inProgress: true,
    },
    {
        title: "Petsoft",
        description:
            "Nextjs app to manage pet grooming salons. It uses Postgress , Prisma ORM and Tailwind for styling and Framer-motion for animations.",
        tags: ["Next.js", "Prisma", "Postgress", 'TypeScript', "Tailwind"],
        imageUrl: '/petsoft.png',
        projectUrl: 'https://petsoft.ltmedia.pl/',
        external: false,
        inProgress: false,
    },
    {
        title: "TalkNow",
        description:
            "A blog template built with modern web technologies to provide a seamless and interactive user experience.",
        tags: ["React", "Postgress", "Next.js", "Prisma", "Framer-motion", "Tailwind", 'TypeScript'],
        imageUrl: '/talknow.jpg',
        projectUrl: 'https://talknow.ltmedia.pl/',
        external: false,
        inProgress: false,
    },
    {
        title: "Landing Agency",
        description:
            "Landing page for a digital agency. It uses Swiper for the slider and GSAP for animations.",
        tags: ["React", "Next.js", "Typescript", "Tailwind", "GSAP", 'Swiper',],
        imageUrl: '/landing.jpg',
        projectUrl: 'https://landing.ltmedia.pl/',
        external: false,
        inProgress: false,
    },

    {
        title: "Evento",
        description:
            "Nextjs app. It uses Postgress as a database, Prisma as an ORM and Tailwind for styling and Framer-motion for animations.",
        tags: ["Next.js", "Prisma", "Framer-motion", 'TypeScript', "Tailwind",],
        imageUrl: '/evento.jpg',
        projectUrl: 'https://evento.ltmedia.pl/',
        external: false,
        inProgress: false,
    },
    {
        title: "rmtDev",
        description:
            "Job board for remote developer jobs. It uses Vite as a bundler and React-query for fetching and caching data from the server.",
        tags: ["React", "TypeScript", "Vite", 'React-query'],
        imageUrl: '/rmtdev.png',
        projectUrl: 'https://rmtdev.ltmedia.pl/',
        external: false,
        inProgress: false,

    },
    {
        title: "Treckbag",
        description:
            "Packing organizer for travelers. It uses Zustand for state management and Vite as a bundler.",
        tags: ["React", "Vite", "Javascript", "Zusand"],
        imageUrl: '/treckbag.jpg',
        projectUrl: 'https://treckbag.ltmedia.pl/',
        external: false,
        inProgress: false,
    },

    {
        title: "Dorjan",
        description:
            "Buissness website. It uses Wordpress CMS, GSAP for animations and ACF for custom fields.",
        tags: ["WordPress", "GSAP", "mySQL", "PHP", "ACF"],
        imageUrl: '/dorjan.jpg',
        projectUrl: 'https://dorjan-energia.pl/',
        external: true,
        inProgress: false,
    },

    {
        title: "Ciemne-Szkiełko",
        description:
            "Buissness website. It uses Wordpress CMS and ACF for custom fields.",
        tags: ["Wordpress", "mySQL", "PHP", "ACF"],
        imageUrl: '/ciemneszkielko.jpg',
        projectUrl: 'https://ciemneszkielko.pl/',
        external: true,
        inProgress: false,
    },
] as const;


export const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Javascript",
    "Node.js",
    "Rest API",
    "CSS3",
    "HTML5",
    "Git",
    "Zod",
    "react-hook-form",
    "Zustand",
    "Tailwindcss",
    "GSAP",
    "Framer Motion",
    "WordPress",
    "WooCommerce",
    "Figma",
    "Photoshop",
    "PHP",
    "Prisma",
    "MySQL",
    "MongoDB",
];


export const MOBILE_BREAKPOINT = 640;
