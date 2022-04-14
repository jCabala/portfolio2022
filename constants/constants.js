export const projects = [
  {
    title: 'Workout Diary',
    description:
      'This web application allows you to track your workouts and more. It is an online workout journal created with React and Bootstrap for frontend, and firebase for backend. It uses firebase authentication and firestore.',

    sampleCrudentials: {
      email: 'test@gmail.com',
      password: 'test123',
    },
    image: '/images/projects/6.png',
    tags: ['ReactJS', 'Bootstrap', 'Firebase', 'Styled Components'],
    source: 'https://github.com/jCabala/workout-diary',
    visit: 'https://workout-diary-jcabala.netlify.app',
    id: 6,
  },
  {
    title: 'jShop',
    description:
      'An online shop with working shopping cart. This website uses Material UI coupled with Styled Components for frontend and additionally Framer Motion for a custo modal element, which is used to display products. The products are fetched from fakestor api (https://fakestoreapi.com/)',
    image: '/images/projects/7.png',
    tags: [
      'Typescript',
      'React',
      'Styled Components',
      'MaterialUI',
      'Framer Motion',
    ],
    source: 'https://github.com/jCabala/jShop',
    visit: 'https://jshop-jcabala.netlify.app',
    id: 2,
  },
  {
    title: 'Portfolio & Blog',
    description:
      'My personal portfolio website which also has a blog connected. I write blog posts in markdown and use marked and grey-matter to dispaly them. I handled the conntact form using EmailJS which autamatically sends emails to me. This website was build using the Next.js framework. The blog may contain some sample posts with lorem ipsum while I am working on my first blogpost.',
    image: '/images/projects/5.png',
    tags: ['Next', 'EmailJS', 'Styled Components'],
    source: 'https://github.com/jCabala/portfolio2022',
    visit: '/blog',
    isThisSite: true,
    id: 5,
  },
  {
    title: 'IP Addresses Tracker',
    description:
      'This is a Frontend Mentor project in which I us an externall API to get data about given IP addresses or domain names. ',
    image: '/images/projects/3.png',
    tags: ['React', 'Styled Components', 'Leaflet'],
    source: 'https://github.com/jCabala/ipTracker',
    visit: 'https://iptracker-jcabala.netlify.app',
    id: 3,
  },
  {
    title: 'SpaceX Launches',
    description:
      'This is a task that I had to complete as a part of a coding interview. The main goal was to implement the infinite scroll functionality. ',
    image: '/images/projects/8.png',
    tags: ['React', 'GraphQL'],
    source: 'https://github.com/jCabala/spaceX-infiniteScroll',
    visit: 'https://jcabala-infinite-scroll.netlify.app/',
    id: 8,
  },
  {
    title: 'BBK Polska',
    description:
      'A website that I created for a civil engineering company. They needed a modern looking website, as their previous one was created almost 20 years ago.',
    image: '/images/projects/2.png',
    tags: ['Bootstrap', 'SASS'],
    source: 'https://github.com/jCabala/bbkNewSite',
    visit: 'https://bbkpl.com/',
    id: 1,
    commercial: true,
  },
  {
    title: 'Zespol MED',
    description:
      'This website was created for a music band from Nowy Sącz. I used strapi for content management and Material UI for some components. Im currently in the proccess of creating a blog for the same band.',
    image: '/images/projects/4.png',
    tags: ['React', 'Strapi', 'Material UI', 'EmailJS'],
    source: 'https://github.com/jCabala/zespolMed',
    visit: 'https://zespol-med.netlify.app/',
    id: 4,
    commercial: true,
  },

  {
    title: 'Huddle',
    description:
      'A project from Frontend Mentor which required me to create a responsice landing page for a made-up company. It was a firs project in which I used styled components.',
    image: '/images/projects/1.jpg',
    tags: ['React', 'Styled Components'],
    source: 'https://github.com/jCabala/codementor-hubble',
    visit: 'https://huddle-jcabala.netlify.app',
    id: 2,
  },
];
