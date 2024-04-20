import Link from "next/link";

export default function SignInButton() {
    return (
        <div className="mr-3">
            <Link
                href="/login"
                className="py-1.5 px-5 border border-solid border-white rounded font-[signika-negative-light] mt-0.5 leading-5"
            >Login</Link>
        </div>
    )
}