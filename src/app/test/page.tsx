export default function page() {
    return (
        <div className="relative h-screen w-screen bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full h-12 bg-[#181818] border-b border-[#3C3C3C] z-20">
                {/* Header content */}
            </header>

            {/* Sidebar 1 */}
            <aside className="fixed top-12 bottom-10 left-0 w-16 bg-[#202020] border-r border-[#3C3C3C] z-10">
                {/* Sidebar 1 content */}
                <div className="flex flex-col justify-between h-full">
                    <ul className="flex flex-col">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                    <ul className="flex flex-col">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </aside>

            {/* Sidebar 2 */}
            <aside className="fixed top-12 bottom-10 left-16 w-48 bg-[#252526] border-r border-[#3C3C3C] z-10">
                {/* Sidebar 2 content */}
                <div className="flex flex-col justify-between h-full">
                    <ul className="flex flex-col">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                    <ul className="flex flex-col">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </aside>

            {/* Main content */}
            <main className="fixed top-12 bottom-10 left-64 right-0 bg-[#1e1e1e] z-0 flex flex-col">
                {/* Fixed-like Nav at top of main */}
                <nav className="h-10 bg-[#2c2c2c] border-b border-[#3C3C3C] px-4 flex items-center shrink-0">
                    <ul className="flex gap-4 text-white text-sm">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Portfolio</li>
                    </ul>
                </nav>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-4 flex-1">
                    {/* Add a lot of content to test scroll */}
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div key={i} className="text-white py-1">
                            Sample Content #{i + 1}
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 w-full h-10 bg-[#181818] border-t border-[#3C3C3C] z-20">
                {/* Footer content */}
            </footer>
        </div>
    )
}
