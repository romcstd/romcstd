"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarOpenEditor() {
    const pathname = usePathname();
    const files = [
        {
            name: "About",
            file: "About.tsx",
            path: "/",
        },
        {
            name: "Skills",
            file: "Skills.tsx",
            path: "/skills",
        },
        {
            name: "Projects",
            file: "Projects.tsx",
            path: "/projects",
        },
    ];
    return (
        <section className="relative w-full">
            <div className="flex items-center bg-background divide-x-1 divide-solid">
                {files.map(({ name, file, path }) => {
                    const isActive = pathname === path;
                    return (
                        <Link
                            key={name}
                            href={path}
                            className={[
                                "flex text-xs tracking-wider py-2 pl-2 pr-2 sm:pr-8 text-zinc-400 font-medium",
                                isActive
                                    ? "bg-secondary !text-primary border-t-1 border-t-[#0078d4]"
                                    : "hover:bg-secondary hover:text-primary"
                            ].join(" ")}>
                            <Image
                                src="/icons/react-ts.svg"
                                alt="React Typescript"
                                width={16}
                                height={16}
                                priority
                                className="flex-shrink-0 mr-1"
                            />
                            <span>{file}</span>
                        </Link>
                    )
                })}
            </div>
            {/* <div className="p-2 flex items-center bg-[#1f1f1f] text-xs">
                <span>src</span>
                <ChevronRight size={16} />
                <span>app</span>
                <ChevronRight size={16} />
                <Image
                    src="/icons/react-ts.svg"
                    alt="React Typescript"
                    width={16}
                    height={16}
                    priority
                    className="flex-shrink-0 mr-1"
                />
                {files.filter(file => file.path === pathname).map((file) => (
                    <span key={file.path}>{file.file}</span>
                ))}
            </div> */}
        </section>
    )
}
