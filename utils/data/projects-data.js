import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Multi-Role Admin Dashboard',
        description: "Pioneered an interactive dashboard for over 200 users, admins, and superadmins, using Firebase authentication for real-time role-based customization. Displayed analytics with intuitive charts and a global map, improving data comprehension and decision-making.",
        tools: ['React.Js', 'Firebase', 'Aceternity UI', 'MUI'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
        link: 'https://github.com/Animesh239/Business-Analysis/tree/develop/'
    },
    {
        id: 2,
        name: 'NestONDC',
        description: 'Delivered the ONDC (Open Network for Digital Commerce) site integrated with OpenStreetMap. Businesses and consumers across Bharat will benefit from seamless digital commerce experiences. Leveraging the OpenStreetMap API for location-based services, this platform not only visualizes shop locations on a high-definition geo map and optimizes the efficiency of site performance of the website by 30%.',
        tools: ['ReactJS', 'Firebase', 'Express.JS'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
        link: 'https://nestondc.el.r.appspot.com/'
    },
    {
        id: 3,
        name: 'Wordle Game',
        description: 'Developed a 5-letter word guessing game in React. The game retrieves words from a JSON file, challenging players to guess a random word within five attempts. Implemented a feature that colors the guessed word after each submission, enhancing the gaming experience.',
        tools: ['React'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: realEstate,
        link: 'https://game-gta.vercel.app/'
    },
    {
        id: 4,
        name: 'Package-Dekstop',
        description: "Crafted an Electron.js desktop app with password authentication, CRUD-equipped news dashboard, and news viewer. Revamped robust security protocols, integrated database functionality, and facilitated cross-platform deployment. Promoting efficiency by 30% and achieved 95% user satisfaction.",
        tools: ['NextJS', 'ElectronJS', 'Firebase'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ayla,
        link: 'https://package-desktop.vercel.app/'
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },