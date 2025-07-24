import {
    VscVscode,
    VscChromeMinimize,
    VscChromeRestore,
    VscChromeClose,
} from "react-icons/vsc";

import {
    FileCode,
    SquarePen,
    MousePointer2,
    Search,
    ArrowRight,
    Play,
    SquareTerminal,
    HeartPlus
} from "lucide-react"

const navItems = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];

const navIcons = [
    { icon: FileCode, label: "File" },
    { icon: SquarePen, label: "Edit" },
    { icon: MousePointer2, label: "Selection" },
    { icon: Search, label: "View" },
    { icon: ArrowRight, label: "Go" },
    { icon: Play, label: "Run" },
    { icon: SquareTerminal, label: "Terminal" },
    { icon: HeartPlus, label: "Help" },
];

const windowControls = [
    { icon: VscChromeMinimize, label: "Minimize Window", title: "Minimize" },
    { icon: VscChromeRestore, label: "Restore Window", title: "Restore" },
    { icon: VscChromeClose, label: "Close Window", title: "Close", danger: true },
];

export default function Header() {
    return (
        <header
            className="fixed top-0 left-0 w-full h-9 bg-background border-b z-20 overflow-hidden"
            role="banner"
        >
            <nav className="flex justify-between items-center" role="navigation" aria-label="VSCode Menu">
                <ul className="h-9 flex items-center gap-2 sm:gap-4 text-xs text-zinc-400 pl-2">
                    <li>
                        <VscVscode className="w-4 h-4 text-[#0078d4]" aria-label="VscVscode Icon" />
                    </li>
                    <div className="hidden sm:flex gap-4">
                        {navItems.map((item) => (
                            <li
                                key={item}
                                className="tracking-wider hover:text-primary"
                                aria-label={item}
                            >
                                {item}
                            </li>
                        ))}
                    </div>
                    <div className="flex gap-2 sm:hidden">
                        {navIcons.map(({ icon: Icon, label }) => (
                            <li
                                key={label}
                                className="cursor-pointer hover:text-primary"
                                aria-label={label}
                                title={label}
                            >
                                <Icon className="w-4 h-4" />
                            </li>
                        ))}
                    </div>
                </ul>
                <ul className="flex text-zinc-400">
                    {windowControls.map(({ icon: Icon, label, title, danger }) => (
                        <li key={label} aria-label={label} title={title}>
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
