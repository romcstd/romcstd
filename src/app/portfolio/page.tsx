import Header from "@/app/components/Header"
import ActivityBar from "@/app/components/ActivityBar";
import Sidebar from "@/app/components/Sidebar";
import StatusBar from "@/app/components/StatusBar";
import NavbarOpenEditor from "@/app/components/NavbarOpenEditor"
export default function Portfolio() {
  return (
    <div className="relative h-screen w-screen">
      <Header />
      <ActivityBar />
      <Sidebar />
      <main className="fixed top-9 bottom-6 left-84 right-0 bg-[#1e1e1e] z-0 flex flex-col">
        <NavbarOpenEditor />
        <div className="overflow-y-auto p-4 flex-1">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="text-white py-1">
              Sample Content #{i + 1}
            </div>
          ))}
        </div>
      </main>
      <StatusBar />
    </div>
  );
}
