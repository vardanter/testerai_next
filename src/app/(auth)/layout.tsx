import Header from "@/components/header"
import Link from "next/link"

export type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="h-screen bg-[#140018]">
            <div className="h-screen text-white">
                <Header />
                    
                <div className="">
                    {children}
                </div>
                
            </div>
        </div>
    )
}