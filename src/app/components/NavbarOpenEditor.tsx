"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react"

export default function NavbarOpenEditor() {
    const pathname = usePathname();
    const files = [
        {
            name: "Home",
            file: "Home.tsx",
            path: "/",
        },
        {
            name: "Contact",
            file: "Contact.tsx",
            path: "/contact",
        },
        {
            name: "Portfolio",
            file: "Portfolio.tsx",
            path: "/portfolio",
        },
    ];
    return (
        <div className="relative w-full">
            <div className="flex items-center bg-[#181818]  divide-x-1 divide-solid divide-[#3C3C3C]">
                {files.map(({ name, file, path }) => {
                    const isActive = pathname === path;
                    return (
                        <Link
                            key={name}
                            href={path}
                            className={[
                                "flex text-xs py-2 pl-2 pr-8",
                                isActive
                                    ? "bg-[#1f1f1f] text-white border-t-1 border-t-[#0078d4]"
                                    : "hover:bg-[#1f1f1f] hover:text-white"
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
        </div>
    )
}
