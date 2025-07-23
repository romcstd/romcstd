import Image from "next/image";

interface Skill {
    name: string;
    alt: string;
    icon: string;
}

const skills: Skill[] = [
    { name: "Html", alt: "Html", icon: "/skills/html.svg" },
    { name: "Css", alt: "Css", icon: "/skills/css.svg" },
    { name: "Javascript", alt: "Javascript", icon: "/skills/js.svg" },
    { name: "Bootstrap", alt: "Bootstrap", icon: "/skills/bootstrap.svg" },
    { name: "Sass", alt: "Sass", icon: "/skills/sass.svg" },
    { name: "jQuery", alt: "jQuery", icon: "/skills/jquery.svg" },
    { name: "Php", alt: "Php", icon: "/skills/php.svg" },
    { name: "MySQL", alt: "MySQL", icon: "/skills/mysql.svg" },
    { name: "React JS", alt: "React JS", icon: "/skills/reactjs.svg" },
    { name: "React TS", alt: "React TS", icon: "/skills/reactts.svg" },
    { name: "Next.js", alt: "Next.js", icon: "/skills/next.svg" },
    { name: "TailwindCSS", alt: "TailwindCSS", icon: "/skills/tailwind.svg" },
    { name: "Shadcn UI", alt: "Shadcn UI", icon: "/skills/shadcn-ui_dark.svg" },
    { name: "MUI", alt: "MUI", icon: "/skills/mui.svg" },
    { name: "Git", alt: "Git", icon: "/skills/git.svg" },
    { name: "Github", alt: "Github", icon: "/skills/github.svg" },
    { name: "Vercel", alt: "Vercel", icon: "/skills/vercel.svg" },
    { name: "Wordpress", alt: "Wordpress", icon: "/skills/wordpress.svg" },
]


export default function Skills() {
    return (
        <section
            className="overflow-y-auto p-6 font-inter"
            aria-labelledby="skills-heading"
        >
            <h2 id="skills-heading" className="sr-only">
                My Skills
            </h2>
            <div className="text-white py-1">
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4">
                    {skills.map((skill) => (
                        <li
                            key={skill.name}
                            className="flex flex-col items-center gap-2 px-2 py-4 bg-[#2d2d2d] rounded-lg hover:bg-[#3c3c3c] transition-colors"
                            title={skill.name}
                        >
                            <Image
                                src={skill.icon}
                                alt={skill.alt}
                                width={24}
                                height={24}
                                className="w-8 h-8"
                                loading="lazy"
                                sizes="(max-width: 768px) 25vw, (max-width: 1280px) 12vw, 8vw"
                            />
                            <span className="text-zinc-300 text-xs">{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
