import {
    VscVscode,
    VscChromeMinimize,
    VscChromeRestore,
    VscChromeClose
} from "react-icons/vsc";

const navItems = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];

const windowControls = [
    { icon: VscChromeMinimize, label: "Minimize Window", title: "Minimize" },
    { icon: VscChromeRestore, label: "Restore Window", title: "Restore" },
    { icon: VscChromeClose, label: "Close Window", title: "Close", danger: true },
];

export default function Header() {
    return (
        <header
            className="fixed top-0 left-0 w-full h-9 bg-[#181818] border-b border-b-[#3C3C3C] z-20 overflow-x-auto overflow-y-hidden sm:overflow-hidden"
            role="banner"
        >
            <nav className="flex justify-between items-center" role="navigation" aria-label="VSCode Menu">
                <ul className="h-9 flex items-center gap-4 text-xs text-zinc-400 pl-2">
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
                    {windowControls.map(({ icon: Icon, label, title, danger }, i) => (
                        <li key={i}>
                            <button
                                type="button"
                                className={`w-12 h-9 flex items-center justify-center focus:outline-none transition-colors ${danger ? "hover:bg-[#C42B1C]" : "hover:bg-[#2A2D2E]"
                                    }`}
                                aria-label={label}
                                title={title}
                            >
                                <Icon className="w-4 h-4" />
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
