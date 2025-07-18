import { FaCodeBranch, FaCircleXmark, FaTriangleExclamation } from "react-icons/fa6";
import { VscCheckAll, VscBell } from "react-icons/vsc";


export default function StatusBar() {
    return (
        <footer
            className="fixed bottom-0 left-0 w-full h-6 bg-[#181818] text-gray-200 text-xs flex items-center px-2 py-1 justify-between border-t border-t-[#3C3C3C] z-20"
            aria-label="Status bar"
        >
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1" aria-label="Current branch: development" title="Current branch: development">
                    <FaCodeBranch className="text-blue-400" role="img" aria-hidden="true" /> development
                </span>
                <span className="flex items-center gap-2" aria-label="Status indicators">
                    <FaCircleXmark className="text-red-400" role="img" aria-hidden="true" /> 0
                    <FaTriangleExclamation className="text-yellow-400" role="img" aria-hidden="true" /> 0
                </span>
            </div>

            <div className="flex items-center gap-4">
                <span title="Spaces: 4">Spaces: 4</span>
                <span title="Encoding: UTF-8">UTF-8</span>
                <span title="Line ending: CRLF">CRLF</span>
                <span title="Language mode: TypeScript JSX">TypeScript JSX</span>
                <span className="flex items-center gap-1" title="Formatter: Prettier"><VscCheckAll role="img" aria-hidden="true" /> Prettier</span>
                <span className="flex items-center gap-1" title="Notifications"><VscBell role="img" aria-hidden="true" /></span>
            </div>
        </footer>
    )
}
