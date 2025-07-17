import Header from "@/app/components/Header"
import ActivityBar from "@/app/components/ActivityBar";
import Sidebar from "@/app/components/Sidebar";
import StatusBar from "@/app/components/StatusBar";
import NavbarOpenEditor from "@/app/components/NavbarOpenEditor"
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex h-full">
        <ActivityBar />
        <Sidebar />
        <section className="relative w-full">
          <NavbarOpenEditor />
        </section>
      </main>
      <StatusBar />
    </div>
  );
}
