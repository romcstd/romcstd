import { FaFilePdf, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const socialIcons = [
    { icon: FaFacebook, label: "Facebook", url: "https://www.facebook.com/romcstd" },
    { icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/romcstd" },
    { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/romcstd" },
    { icon: FaGithub, label: "GitHub", url: "https://www.github.com/romcstd" },
];

export default function AboutMe() {
    return (
        <section className="p-4 sm:p-6 flex flex-col justify-center h-full text-center">
            <h1 className="text-primary font-bold tracking-tighter text-2xl sm:text-4xl md:text-5xl lg:text-6xl/none">Frontend Developer</h1>
            <p className="sm:text-base mt-4 text-zinc-400 md:text-xl mx-auto max-w-[750px]">Building digital user interfaces and experiences with modern technologies. Focused on creating elegant solutions to complex problems.</p>
            <ul className="mt-6">
                {socialIcons.map(({ icon: Icon, label, url }) => (
                    <li key={label} className="inline-block mr-4">
                        <Link
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-primary focus:outline-none focus:text-primary"
                            aria-label={label}
                            title={label}
                        >
                            <Button className="bg-transparent h-10 w-10 border cursor-pointer hover:bg-primary/10 focus:bg-primary/10 transition-colors">
                                <Icon className="w-4 h-4 text-primary" />
                            </Button>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mt-6">
                <Link
                    href="./files/Curriculum-Vitae-Romel-Custodio.pdf"
                    target="_blank"
                    className="inline-flex items-center py-4 px-8 bg-[#0078d4] text-white text-sm font-bold rounded-4xl hover:bg-[#005a9e] focus:outline-none focus:bg-[#005a9e]"
                    aria-label="Download CV"
                    title="Download CV"
                >
                    <FaFilePdf className="mr-2" />
                    <span>Download my CV</span>
                </Link>
            </div>
        </section>
    )
}
