import Image from "next/image";

const skills = [
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
        <section className="overflow-y-auto p-6">
            <div className="text-white py-1">
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
                    {skills.map((skill, i) => (
                        <li key={i} className="flex flex-col items-center gap-2 px-2 py-4 bg-[#2d2d2d] rounded-lg hover:bg-[#3c3c3c] transition-colors">
                            <Image
                                src={skill.icon}
                                alt={skill.alt}
                                width={24}
                                height={24}
                                className="inline-block"
                            />
                            <span className="text-zinc-300">{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
