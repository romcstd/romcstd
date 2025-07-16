import { 
    VscVscode, 
    VscChromeMinimize, 
    VscChromeRestore, 
    VscChromeClose
} from "react-icons/vsc";

export default function Header() {
    return (
        <header className="relative">
            <div className="w-full">
                <nav className="relative bg-[#181818] flex justify-between items-center border-b-1 border-b-[#3C3C3C]">
                    <ul className="flex flex-row items-center gap-x-4 text-xs pl-2">
                        <li><VscVscode className="w-5 h-5 text-[#0078d4]" /></li>
                        <li>File</li>
                        <li>Edit</li>
                        <li>Selection</li>
                        <li>View</li>
                        <li>Go</li>
                        <li>Run</li>
                        <li>Terminal</li>
                        <li>Help</li>
                    </ul>
                    <ul className="flex flex-row">
                        <li className="w-11.5 h-9 flex items-center justify-center hover:bg-[#2A2D2E]"><VscChromeMinimize className="w-4 h-4" /></li>
                        <li className="w-11.5 h-9 flex items-center justify-center hover:bg-[#2A2D2E]"><VscChromeRestore className="w-4 h-4" /></li>
                        <li className="w-11.5 h-9 flex items-center justify-center hover:bg-[#2A2D2E]"><VscChromeClose className="w-4 h-4" /></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
