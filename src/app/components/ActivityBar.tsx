import { ThemeToggle } from "./ThemeToggle";
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
    { icon: VscFiles, label: "Explorer", active: true },
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

type IconProps = {
    icon: React.ElementType;
    label: string;
    active?: boolean;
};

const IconButton = ({ icon: Icon, label, active }: IconProps) => (
    <li>
        <button
            type="button"
            className={`${active ? "text-primary" : "text-zinc-400"} hover:text-primary focus:outline-none transition-colors focus:text-primary`}
            aria-label={label}
            title={label}
        >
            <Icon className="w-6 h-6" />
        </button>
    </li>
);


export default function ActivityBar() {
    return (
        <aside
            className="fixed top-9 bottom-6 left-0 w-12 bg-background border-r p-3 z-10"
            role="navigation"
            aria-label="Activity Bar"
        >
            <div className="flex flex-col justify-between h-full">
                <ul className="flex flex-col gap-6">
                    {topIcons.map((item) => (
                         <IconButton key={item.label} {...item} />
                    ))}
                </ul>
                <ul className="flex flex-col gap-6 text-zinc-400">
                    <li><ThemeToggle /></li>
                    {bottomIcons.map((item) => (
                        <IconButton key={item.label} {...item} />
                    ))}
                </ul>
            </div>
        </aside>
    )
}
