"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import { FaGithub, FaWordpressSimple } from "react-icons/fa6";
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
    { name: "Shadcn UI", alt: "Shadcn UI", icon: "/skills/shadcn-ui" },
    { name: "MUI", alt: "MUI", icon: "/skills/mui.svg" },
    { name: "Vercel", alt: "Vercel", icon: "/skills/vercel.svg" },
    { name: "Git", alt: "Git", icon: "/skills/git.svg" },
]


export default function Skills() {
    const { theme  } = useTheme();
    const currentTheme = theme ?? "light";
    return (
        <section
            className="overflow-y-auto px-6 py-8 font-inter"
            aria-labelledby="skills-heading"
        >
            <h2 id="skills-heading" className="text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Tech Stack
            </h2>
            <div className="text-primary py-1">
                <div className="grid grid-cols-2 s:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 4k:gap-4 gap-4">
                    {skills.map((skill) => {
                        const isThemedIcon = skill.name === "Shadcn UI";
                        const iconSrc = isThemedIcon
                            ? `${skill.icon}-${currentTheme}.svg`
                            : skill.icon;
                        return (
                            <Card
                                key={skill.name}
                                className="flex flex-col items-center px-2 py-8 rounded-lg bg-transparent shadow-none hover:shadow-lg transition-shadow"
                                title={skill.name}
                            >
                                <Image
                                    src={iconSrc}
                                    alt={skill.alt}
                                    width={24}
                                    height={24}
                                    quality={100}
                                    className="w-8 h-8"
                                    priority
                                />
                                <span className="text-zinc-400 text-xs font-bold">{skill.name}</span>
                            </Card>
                        )
                    })}
                    <Card
                        className="flex flex-col items-center px-2 py-8 rounded-lg bg-transparent shadow-none hover:shadow-lg transition-shadow"
                        title="Github"
                    >
                        <FaGithub className="w-8 h-8 text-primary" />
                        <span className="text-zinc-400 text-xs font-bold">Github</span>
                    </Card>
                    <Card
                        className="flex flex-col items-center px-2 py-8 rounded-lg bg-transparent shadow-none hover:shadow-lg transition-shadow"
                        title="Wordpress"
                    >
                        <FaWordpressSimple className="w-8 h-8 text-primary" />
                        <span className="text-zinc-400 text-xs font-bold">Wordpress</span>
                    </Card>
                </div>
            </div>
        </section>
    )
}
