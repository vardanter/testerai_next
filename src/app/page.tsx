import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-[#140018]">
      <div className="h-screen text-white">
        <Header />
        
        <div className="flex justify-center items-center flex-col h-[70%] capitalize text-center">
          <div className="text-[2rem] font-[signika-negative-medium] m-0 leading-8">understand any<span className="text-sky-500"> with ai</span></div>
          <div className="font-[signika-negative-light] text-[#7e7e7e] mb-7 mt-4 px-1.5">
            stop using stack dverflow for help. talk directory to your codebase
            like you would an expert
          </div>
          <Link
            href="/chat/"
            className="py-2.5 px-5 bg-sky-500 rounded font-[signika-negative-light] mt-0.5 leading-5"
          >Get Started</Link>
        </div>
      </div>
    </div>
  );
}
