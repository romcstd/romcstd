import { FaCodeBranch, FaCircleXmark, FaTriangleExclamation } from "react-icons/fa6";
import { VscCheckAll, VscBell } from "react-icons/vsc";


export default function StatusBar() {
    return (
        <footer
            className="fixed bottom-0 left-0 w-full h-6 bg-background text-gray-200 text-xs flex items-center px-2 py-1 justify-between border-t z-20"
            aria-label="Status bar"
        >
            <div className="flex items-center gap-2 sm:gap-4">
                <span className="flex items-center gap-1 text-primary" aria-label="Current branch: development" title="Current branch: development">
                    <FaCodeBranch className="text-[#0078d4]" role="img" aria-hidden="true" /> development
                </span>
                <span className="flex items-center gap-2 text-primary" aria-label="Status indicators">
                    <FaCircleXmark className="text-red-400" role="img" aria-hidden="true" /> 0
                    <FaTriangleExclamation className="text-yellow-400" role="img" aria-hidden="true" /> 0
                </span>
            </div>

            <div className="flex items-center text-primary gap-2 sm:gap-4">
                <span className="hidden sm:block" title="Spaces: 4">Spaces: 4</span>
                <span title="Encoding: UTF-8">UTF-8</span>
                <span className="hidden sm:block" title="Line ending: CRLF">CRLF</span>
                <span title="Language mode: TypeScript JSX">TypeScript JSX</span>
                <span className="hidden sm:flex items-center gap-1" title="Formatter: Prettier"><VscCheckAll role="img" aria-hidden="true" /> Prettier</span>
                <span className="flex items-center gap-1" title="Notifications"><VscBell role="img" aria-hidden="true" /></span>
            </div>
        </footer>
    )
}
