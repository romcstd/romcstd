import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { FaChrome, FaGithub } from "react-icons/fa6";

interface Project {
    id: string;
    name: string;
    title: string;
    description: string;
    image: string;
    skills: string[];
    link: string;
    github: string;
}

const projects: Project[] = [
    {
        id: "threadup",
        name: "ThreadUp",
        description: "ThreadUp is a modern MERN-stack web application that empowers users to create accounts, share posts, and engage in meaningful discussions through thread-based conversations.",
        title: "ThreadUp",
        image: "/projects/threadup.png",
        skills: ["React", "Vite", "Tailwind CSS", "Typescript", "Zustand", "Node.js", "Express", "MongoDB"],
        link: "https://threadup-app.vercel.app/",
        github: "https://github.com/romcstd/threadup"
    },
    {
        id: "netflix-clone",
        name: "Netflix Clone",
        description: "A custom-themed front-end replica of Netflix Tudum of Top 10 carousel with Country & Entertainment Filters and featuring theme toggle.",
        title: "Netflix Clone",
        image: "/projects/netflix-clone.png",
        skills: ["Next.js", "React", "Tailwind CSS", "Typescript", "Vercel"],
        link: "https://netflix-one-phi.vercel.app/",
        github: "https://github.com/romcstd/netflix"
    },
    {
        id: "amynch-digital-mind",
        name: "Amynch Digital Mind",
        description: "A Business website offer a services of Web Development, Search Engine Optimization (SEO), Accounting Services, and Virtual Assistance.",
        title: "Amynch Digital Mind",
        image: "/projects/amynch-digital-mind.png",
        skills: ["React", "Tailwind CSS", "React Router", "Vercel"],
        link: "https://amynch-digital-mind.vercel.app/",
        github: "https://github.com/romcstd/amynch-digital-mind"
    }
]

export default function Projects() {
    return (
        <section
            className="overflow-y-auto px-6 py-8 font-inter"
            aria-labelledby="projects-heading"
        >
            <h2 id="projects-heading" className="text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                My Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.id} className="overflow-hidden p-0 bg-transparent shadow-none hover:shadow-lg transition-shadow">
                        <CardHeader className="relative p-0 rounded-xl">
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={800}
                                height={500}
                                priority
                            />
                        </CardHeader>
                        <CardContent>
                            <h3 className="font-semibold text-xl mb-2">{project.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex justify-between items-center mt-auto">
                            <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 text-xs hover:underline">
                                <FaChrome className="h-4 w-4" />
                                Live Demo
                            </Link>
                            <Link href={project.github} target="_blank" className="inline-flex items-center gap-2 text-xs hover:underline">
                                <FaGithub className="h-4 w-4" />
                                View on GitHub
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}
