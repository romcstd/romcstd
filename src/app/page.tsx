import Header from "@/app/components/Header"
import ActivityBar from "@/app/components/ActivityBar";
import Sidebar from "@/app/components/Sidebar";
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
    <Header />
    <div className="flex h-full">
      <ActivityBar />
      <Sidebar />
      <main></main>
    </div>
    </div>
  );
}
