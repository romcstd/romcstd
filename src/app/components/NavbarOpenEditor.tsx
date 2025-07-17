import Image from "next/image";

export default function NavbarOpenEditor() {
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
        <div className="relative bg-[#181818] text-zinc-400 text-xs w-full">
            <div className="border-b border-[#3C3C3C] flex items-center text-gray-400">
                {files.map(({ name, file, path }) => (
                    <div key={name} className="flex py-2 px-4 border-r border-[#3C3C3C]">
                        <Image
                            src="/icons/react-ts.svg"
                            alt="React Typescript"
                            width={16}
                            height={16}
                            className="mr-2"
                            priority
                        />
                        <span></span>{file}
                    </div>
                ))}
            </div>
        </div>
    )
}
