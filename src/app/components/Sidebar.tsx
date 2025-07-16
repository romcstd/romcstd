import {
    VscEllipsis,
    VscChevronDown,
    VscChevronRight,
    VscFolderOpened,
} from "react-icons/vsc";

export default function Sidebar() {
    return (
        <aside className="relative bg-[#181818] flex">
            <div className="w-72 flex flex-col py-2 px-4 border-r-1 border-r-[#3C3C3C]">
                <div className="flex flex-row justify-between mb-3">
                    <div className="text-xs">Explorer</div>
                    <div><VscEllipsis className="w-4 h-4" /></div>
                </div>
                <div>
                    <ul className="text-xs font-bold flex flex-row mb-2">
                        <li><VscChevronDown className="w-4 h-4 mr-2" /></li>
                        <li><VscFolderOpened className="w-4 h-4 mr-2" /></li>
                        <li><span>romcstd</span></li>
                    </ul>
                    <ul className="text-xs flex flex-col ms-2 gap-y-2 mb-2">
                        <li className="flex flex-row"><VscChevronRight className="w-4 h-4 mr-2" /><VscFolderOpened className="w-4 h-4 mr-2" /><span>.next</span></li>
                        <li className="flex flex-row"><VscChevronRight className="w-4 h-4 mr-2" /><VscFolderOpened className="w-4 h-4 mr-2" /><span>node_modules</span></li>
                        <li className="flex flex-row"><VscChevronRight className="w-4 h-4 mr-2" /><VscFolderOpened className="w-4 h-4 mr-2" /><span>public</span></li>
                        <li className="flex flex-row"><VscChevronRight className="w-4 h-4 mr-2" /><VscFolderOpened className="w-4 h-4 mr-2" /><span>src</span></li>
                    </ul>
                    <ul className="text-xs flex flex-col ms-8 gap-y-2">
                        <li className="flex flex-row"><VscFolderOpened className="w-4 h-4 mr-2" /><span>.gitignore</span></li>
                        <li className="flex flex-row"><VscFolderOpened className="w-4 h-4 mr-2" /><span>eslint.config.mjs</span></li>
                        <li className="flex flex-row"><VscFolderOpened className="w-4 h-4 mr-2" /><span>next-env.d.ts</span></li>
                        <li className="flex flex-row"><VscFolderOpened className="w-4 h-4 mr-2" /><span>next.config.ts</span></li>
                        <li className="flex flex-row"><VscFolderOpened className="w-4 h-4 mr-2" /><span>package.json</span></li>
                        <li className="flex flex-row"><VscFolderOpened className="w-4 h-4 mr-2" /><span>postcss.config.mjs</span></li>
                        <li className="flex flex-row"><VscFolderOpened className="w-4 h-4 mr-2" /><span>README.md</span></li>
                        <li className="flex flex-row"><VscFolderOpened className="w-4 h-4 mr-2" /><span>tsconfig.json</span></li>
                        <li className="flex flex-row"><VscFolderOpened className="w-4 h-4 mr-2" /><span>yarn.lock</span></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
