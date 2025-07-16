import {
    VscFiles,
    VscSearch,
    VscSourceControl,
    VscDebug,
    VscExtensions,
    VscJson,
    VscAccount,
    VscSettingsGear,
} from "react-icons/vsc";

export default function ActivityBar() {
    return (
        <aside className="relative bg-[#181818] w-auto flex whitespace-nowrap">
            <div className="flex flex-col justify-between p-3 border-r-1 border-r-[#3C3C3C]">
                <ul className="flex flex-col gap-y-8 text-zinc-400">
                    <li className="hover:text-white"><VscFiles className="w-6 h-6" /></li>
                    <li className="hover:text-white"><VscSearch className="w-6 h-6" /></li>
                    <li className="hover:text-white"><VscSourceControl className="w-6 h-6" /></li>
                    <li className="hover:text-white"><VscDebug className="w-6 h-6" /></li>
                    <li className="hover:text-white"><VscExtensions className="w-6 h-6" /></li>
                    <li className="hover:text-white"><VscJson className="w-6 h-6" /></li>
                </ul>
                <ul className="flex flex-col gap-y-8 text-zinc-400">
                    <li className="hover:text-white"><VscAccount className="w-6 h-6" /></li>
                    <li className="hover:text-white"><VscSettingsGear className="w-6 h-6" /></li>
                </ul>
            </div>
        </aside>
    )
}
