import SignUpButton from "@/components/authorization/buttons/signin_button"
import SignoutButton from "@/components/authorization/buttons/signout_button"
import SignInButton from "@/components/authorization/buttons/signup_button"
import Header from "@/components/header"
import { cookies } from "next/headers"

import {Metadata} from 'next'

export const metadata: Metadata = {
  title: "Tester AI",
  appLinks: {
    web: [
      {url: "/static/styles/agate.min.css"}
    ]
  }
}

export type LayoutProps = {
    children: React.ReactNode
    authorize: React.ReactNode
}

export default function Layout({ children, authorize }: LayoutProps) {
    const access_token = cookies().get("access-token")
    
    return (
        <div className="h-full bg-[#14171f]">
            <div className="h-full text-white">                
                <Header className="items-center">
                    <div className="flex justify-end items-center flex-row">
                        {!access_token && (
                            <>
                                <SignUpButton />
                                <SignInButton />
                            </>
                        )}
                        {access_token && <SignoutButton />}
                    </div>
                </Header>
                {authorize}
                {children}
            </div>
        </div>
    )
}