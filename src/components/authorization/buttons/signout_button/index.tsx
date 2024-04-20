'use client'

import { serverSignOut } from "@/app/lib/actions";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignoutButton() {
    const router = useRouter()
    const logOut = () => {
        signOut({redirect: false}).then(r => {
            serverSignOut().then(r => {
                router.replace("/chat")
                router.refresh()
            })
        })
    }
    return (
        <div className="mr-3">
            <Link
                href="#"
                onClick={logOut}
                className="py-1.5 px-5 bg-sky-500 rounded font-[signika-negative-light] mt-0.5 leading-5"
            >Log out</Link>
        </div>
    )
}