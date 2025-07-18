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

const topIcons = [
    { icon: VscFiles, label: "Explorer" },
    { icon: VscSearch, label: "Search" },
    { icon: VscSourceControl, label: "Source Control" },
    { icon: VscDebug, label: "Run & Debug" },
    { icon: VscExtensions, label: "Extensions" },
    { icon: VscJson, label: "JSON" },
];

const bottomIcons = [
    { icon: VscAccount, label: "Account" },
    { icon: VscSettingsGear, label: "Settings" },
];

export default function ActivityBar() {
    return (
        <aside
            className="fixed top-9 bottom-6 left-0 w-12 bg-[#181818] border-r border-[#3C3C3C] p-3 z-10"
            role="navigation"
            aria-label="Activity Bar"
        >
            <div className="flex flex-col justify-between h-full">
                <ul className="flex flex-col gap-6 text-zinc-400">
                    {topIcons.map(({ icon: Icon, label }) => (
                        <li key={label}>
                            <button
                                type="button"
                                className="hover:text-white focus:outline-none focus:text-white"
                                aria-label={label}
                                title={label}
                            >
                                <Icon className="w-6 h-6" />
                            </button>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-6 text-zinc-400">
                    {bottomIcons.map(({ icon: Icon, label }) => (
                        <li key={label}>
                            <button
                                type="button"
                                className="hover:text-white focus:outline-none focus:text-white"
                                aria-label={label}
                                title={label}
                            >
                                <Icon className="w-6 h-6" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}
