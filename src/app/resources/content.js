import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Luca',
    lastName: 'Lapenna',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Developer',
    avatar: '/images/avatar.jpg',
    location: 'America/Montreal',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'French', "Italian"]  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/1mshy/',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/luca-lapenna',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'lucalapenna17@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Developer and Enthusiast</>,
    subline: <>I'm {person.name}, a software developer at <InlineCode>Unitronic</InlineCode>, where I craft intuitive 
    user experiences. After hours, I dive into expanding on my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>{person.firstName} is a dedicated software developer with a deep-seated passion for crafting intuitive,
            high-performance digital experiences. With expertise spanning user interface (UI) to data structures and visualization,
            {person.firstName} has a talent for transforming complex challenges into elegant, effective solutions that blend design with cutting-edge technology.
        </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Unitronic',
                timeframe: 'July 2022 - Present',
                role: 'Electronics Assembler ',
                achievements: [
                    <>Assemble electronic components, including circuit boards, and wiring harnesses</>,
                    <>Inspect and test incoming and assembled components</>,
                    <>Troubleshooting and resolve issues with defective components</>,
                    <>Package products and manage inventory</>,
                    <>Quality control on carbon fiber and stainless steel </>,

                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/work/ucp_cable.jpg',
                        alt: 'Unitronic Uni Connect Plus cable',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/work/Unitronic Carbon Fiber Air Duct.jpg',
                        alt: 'Unitronic_Carbon_Fiber_Air_Duct',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/work/inlet.jpg',
                        alt: 'inlet',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                company: 'Unitronic',
                timeframe: 'July 2022 - Present',
                role: 'Software Developer',
                achievements: [
                    <>Develop programs that identify and troubleshoot assembled circuit boards and wiring harnesses</>,
                    <>Developing front-end applications to remotely tune customer vehicles</>,
                    <>Build desktop applications to analyze large datasets</>,
                    <>Assist in optimization and structure of translation algorithms from binary to json</>,

                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/work/custom_tune_3.png',
                        alt: 'Custom tune website 1',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/work/custom_tune_2.png',
                        alt: 'Custom tune website 3',
                        width: 16,
                        height: 9
                    }
                ]
            },
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Concordia University',
                description: <>Currently Studying Software Engineering (2024-Present)</>,
            },
            {
                name: 'Vanier College',
                description: <>Completed DEC in Computer Science and Mathematics (2022-2024)</>,
            }
        ]
    },
    // TODO: Add your own content
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Web Development',
                description: <>Able to create visually appealing and reactive weblications for the browser</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Scripting',
                description: <>Create scripts and tools to analyse large amounts of data</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My project gallery',
    description: `Beautiful work doesn't need documentation, just shown`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/projects/investor-dreams/playground2.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/projects/investor-dreams/playground1.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-01.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-02.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.png',
            alt: 'image',
            orientation: 'horizontal'
        }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };