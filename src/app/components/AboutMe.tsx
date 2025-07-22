import { FaFilePdf, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import Link from "next/link";

const socialIcons = [
  { icon: FaFacebook, label: "Facebook", url: "https://www.facebook.com/romcstd" },
  { icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/romcstd" },
  { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/romcstd" },
  { icon: FaGithub, label: "GitHub", url: "https://www.github.com/romcstd" },
];

export default function AboutMe() {
    return (
        <section className="overflow-y-auto p-6 flex flex-col justify-center h-full">
            <h1 className="text-white text-3xl uppercase">Hello, I&apos;m Romel Custodio</h1>
            <p className="text-zinc-300 mt-2 text-7xl uppercase font-bold">Frontend Developer</p>
            <ul>
                <li className="text-zinc-300 mt-4">I love building user interfaces and creating seamless user experiences.</li>
                <li className="text-zinc-300 mt-2">
                    Let’s stay connected! You can contact me directly at{" "}
                    <Link href="tel:+639389744926" className="hover:underline">+63-938-9744-926</Link>{" "}
                    or email me at{" "} <Link href="https://mail.google.com/mail/u/0/?fs=1&to=romelroxascustodio@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer" className="hover:underline">romelroxascustodio@gmail.com</Link></li>
                <li className="text-zinc-300 mt-2">Follow me on social media below.</li>
            </ul>
            <ul className="mt-6">
                {socialIcons.map(({ icon: Icon, label, url }) => (
                    <li key={label} className="inline-block mr-4">
                        <Link
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white focus:outline-none focus:text-white"
                            aria-label={label}
                            title={label}
                        >
                            <Icon className="w-6 h-6" />
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mt-6">
                <Link
                    href="./files/Curriculum-Vitae-Romel-Custodio.pdf"
                    target="_blank"
                    className="inline-flex items-center py-4 px-8 bg-[#0078d4] text-white rounded-4xl hover:bg-[#005a9e] focus:outline-none focus:bg-[#005a9e]" aria-label="Download CV" title="Download CV">
                    <FaFilePdf className="mr-2" />
                    <span>Download my CV</span>
                </Link>
            </div>
        </section>
    )
}
