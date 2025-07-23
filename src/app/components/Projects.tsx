import Link from "next/link";
import Image from "next/image";

interface Project {
    id: string;
    name: string;
    alt: string;
    description: string;
    image: string;
    skills: string[];
    link: string;
    github: string;
}

const projects: Project[] = [
    {
        id: "amynch-digital-mind",
        name: "Amynch Digital Mind",
        description: "Business website showcasing a full suite of services, including Web Development, Search Engine Optimization (SEO), Accounting Services, and Virtual Assistance.",
        alt: "Amynch Digital Mind",
        image: "/projects/amynch-digital-mind.png",
        skills: ["React", "Tailwind CSS", "React Router", "Vercel"],
        link: "https://amynch-digital-mind.vercel.app/",
        github: "https://github.com/romcstd/amynch-digital-mind"
    },
    {
        id: "netflix-clone",
        name: "Netflix Clone",
        description: "A sleek, custom-themed front-end replica of Netflix's iconic Top 10 carousel with Country & Entertainment Filters, featuring Dark / Light mode toggle, fully responsive layouts, and smooth animations for an immersive, user-focused experience.",
        alt: "Netflix Clone",
        image: "/projects/netflix-clone.png",
        skills: ["Next.js", "Tailwind CSS", "Typescript", "ShadCN UI", "Vercel"],
        link: "https://netflix-one-phi.vercel.app/",
        github: "https://github.com/romcstd/netflix"
    },
]

export default function Projects() {
    return (
        <section
            className="overflow-y-auto p-6 font-inter"
            aria-labelledby="projects-heading"
        >
            <h1 id="projects-heading" className="sr-only">
                My Projects
            </h1>
            {projects.map((project) => (
                <article 
                key={project.id} 
                className="mb-8 flex flex-col md:flex-row bg-[#181818] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-full md:w-4/12 mb-4 md:mb-0 md:mr-4">
                        <Image
                            src={project.image}
                            alt={`Screenshot of ${project.name}`}
                            width={400}
                            height={225}
                            className="rounded-lg w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="w-full md:w-8/12 flex flex-col justify-center">
                        <h3 className="text-white text-xl font-bold mb-4">{project.name}</h3>
                        <p className="text-zinc-300 text-sm leading-normal">{project.description}</p>
                        <ul className="flex flex-wrap gap-2 mt-2">
                            {project.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="bg-zinc-800 text-zinc-200 px-2 py-1 rounded text-xs">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-4 mt-4">
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`Live demo of ${project.name}`}
                                aria-label={`View live demo of ${project.name}`}
                                className="text-sm inline-flex items-center py-2 px-4 bg-[#0078d4] text-white rounded-4xl hover:bg-[#005a9e] focus-visible:ring-2 focus-visible:ring-blue-300 focus:bg-[#005a9e]">
                                Live Demo
                            </Link>
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`Source code for ${project.name} on GitHub`}
                                aria-label={`View source code for ${project.name}`}
                                className="text-sm inline-flex items-center py-2 px-4 bg-[#0078d4] text-white rounded-4xl hover:bg-[#005a9e] focus-visible:ring-2 focus-visible:ring-blue-300 focus:bg-[#005a9e]">
                                GitHub Code
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    )
}
