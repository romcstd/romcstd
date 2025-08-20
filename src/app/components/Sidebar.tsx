import Image from "next/image";
import {
    FolderOpen,
    Ellipsis,
    ChevronDown,
    ChevronRight,
} from "lucide-react"

const folders = [
    { name: ".next", alt: "Folder Next", icon: "/icons/folder-next.svg" },
    { name: "node_modules", alt: "Folder Node Modules", icon: "/icons/folder-node-modules.svg" },
    { name: "public", alt: "Folder Public", icon: "/icons/folder-public.svg" },
    { name: "src", alt: "Folder Source", icon: "/icons/folder-src.svg" },
]
const files = [
    { name: ".gitignore", alt: "Git Ignore", icon: "/icons/gitignore.svg" },
    { name: "eslint.config.mjs", alt: "Next Config", icon: "/icons/eslint.svg" },
    { name: "next-env.d.ts", alt: "Next Env Def Typescript", icon: "/icons/next-env-typescript-def.svg" },
    { name: "next.config.ts", alt: "Package Json", icon: "/icons/next-config.svg" },
    { name: "package.json", alt: "Package Json", icon: "/icons/package-json.svg" },
    { name: "postcss.config.mjs", alt: "Post CSS Config", icon: "/icons/postcss-config.svg" },
    { name: "README.md", alt: "README", icon: "/icons/readme.svg" },
    { name: "tsconfig.json", alt: "TS Config", icon: "/icons/tsconfig.svg" },
    { name: "yarn.lock", alt: "Yarn", icon: "/icons/yarn.svg" },
]

export default function Sidebar() {
    return (
        <aside
            className="fixed top-9 bottom-6 left-12 w-auto bg-background hidden xl:block"
            role="complementary"
            aria-label="Sidebar"
        >
            <div className="h-full w-72 flex flex-col py-2 border-r">
                <div className="flex justify-between px-4 mb-3">
                    <span className="text-[11px] uppercase text-xs text-primary">
                        Explorer
                    </span>
                    <button
                        aria-label="More Options"
                        className="text-primary hover:text-primary"
                    >
                        <Ellipsis size={16} />
                    </button>
                </div>
                <div>
                    <div className="flex items-center gap-1 ms-4 mb-2 text-xs tracking-wider font-bold text-primary">
                        <ChevronDown size={16} aria-hidden="true" />
                        <FolderOpen size={16} aria-hidden="true" />
                        <span className="uppercase">romcstd</span>
                    </div>
                    <ul className="flex flex-col gap-2 ms-8 tracking-wide" aria-label="Folders">
                        {folders.map(({ name, alt, icon }) => (
                            <li key={name} className="flex flex-row text-primary text-xs font-medium">
                                <ChevronRight size={16} className="text-primary mr-1" aria-hidden="true" />
                                <Image
                                    src={icon}
                                    alt={alt}
                                    width={16}
                                    height={16}
                                    className="mr-2"
                                    priority
                                />
                                <span>{name}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex flex-col gap-2 pl-[52px] mt-3 tracking-wide" aria-label="Files">
                        {files.map(({ name, alt, icon }) => (
                            <li key={name} className="flex items-center text-primary text-xs font-medium">
                                <Image
                                    src={icon}
                                    alt={alt}
                                    width={16}
                                    height={16}
                                    className="mr-2"
                                    loading="lazy"
                                />
                                <span>{name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}
