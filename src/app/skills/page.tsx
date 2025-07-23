import Header from "@/app/components/Header"
import ActivityBar from "@/app/components/ActivityBar";
import Sidebar from "@/app/components/Sidebar";
import StatusBar from "@/app/components/StatusBar";
import NavbarOpenEditor from "@/app/components/NavbarOpenEditor"
import Skills from "@/app/components/Skills";

export default function SkillsPage() {
  return (
    <div className="relative h-screen w-screen">
      <Header />
      <ActivityBar />
      <Sidebar />
      <main className="fixed top-9 bottom-6 left-12 xl:left-84 right-0 bg-[#1e1e1e] z-0 flex flex-col">
        <NavbarOpenEditor />
        <Skills />
      </main>
      <StatusBar />
    </div>
  );
}
