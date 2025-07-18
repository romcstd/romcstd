import {
    VscVscode,
    VscChromeMinimize,
    VscChromeRestore,
    VscChromeClose
} from "react-icons/vsc";

const navItems = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];

export default function Header() {
    return (
        <header 
            className="fixed top-0 left-0 w-full h-9 bg-[#181818] border-b border-b-[#3C3C3C] z-20" 
            role="banner"
        >
            <nav className="flex justify-between items-center" role="navigation" aria-label="VSCode Menu">
                <ul className="flex items-center gap-4 text-xs text-zinc-400 pl-2">
                    <li>
                        <VscVscode className="w-5 h-5 text-[#0078d4]" aria-label="VscVscode Icon" />
                    </li>
                    {navItems.map((item) => (
                        <li
                            key={item}
                            className="cursor-default hover:text-white"
                            aria-label={item}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <ul className="flex text-white">
                    <li>
                        <button
                            type="button"
                            className="w-12 h-9 flex items-center justify-center hover:bg-[#2A2D2E] focus:outline-none"
                            aria-label="Minimize Window"
                            title="Minimize"
                        >
                            <VscChromeMinimize className="w-4 h-4" aria-label="VscChromeMinimize Icon" />
                        </button>

                    </li>
                    <li>
                        <button
                            type="button"
                            className="w-12 h-9 flex items-center justify-center hover:bg-[#2A2D2E] focus:outline-none"
                            aria-label="Restore Window"
                            title="Restore"
                        >
                            <VscChromeRestore className="w-4 h-4" aria-label="VscChromeRestore Icon" />
                        </button>

                    </li>
                    <li>
                        <button
                            type="button"
                            className="w-12 h-9 flex items-center justify-center hover:bg-[#C42B1C] focus:outline-none"
                            aria-label="Close Window"
                            title="Close"
                        >
                            <VscChromeClose className="w-4 h-4" aria-label="VscChromeClose Icon" />
                        </button>

                    </li>
                </ul>
            </nav>
        </header>
    )
}
