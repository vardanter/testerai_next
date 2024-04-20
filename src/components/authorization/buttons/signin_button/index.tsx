import Link from "next/link";

export default function SignUpButton() {
    return (
        <div className="mr-2">
            <Link
                href="/signup"
                className="py-1.5 px-5 bg-sky-500 rounded font-[signika-negative-light] mt-0.5 leading-5"
            >Sign up</Link>
        </div>
    )
}