'use client'


import { useRouter } from "next/navigation"
import { FormEvent, FormEventHandler, useRef, useState } from "react"
import GitHubButton from "../github_button"
import GoogleButton from "../google_button"
import clsx from "clsx"
import { signIn } from "next-auth/react"

const modeData = {
    login: {
        buttonText: 'Login',
    },
    signup: {
        buttonText: 'Sign Up',
    }
}

const SigninForm = ({mode}: {mode: 'signup' | 'login'}) => {
    const router = useRouter()
    const [errorResponse, setErrorResponse] = useState<boolean>(false)

    const onSubmit: FormEventHandler = async (e: FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        
        console.log("fff", Object.fromEntries(formData))
        const response = await signIn('credentials', {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
            mode
        })
        console.log("response", response)
        if (response && !response.error) {
            setErrorResponse(false)
            router.replace('/chat')
            router.refresh()
        } else {
            setErrorResponse(true)
        }
    }

    return (
        <form method="POST" onSubmit={onSubmit} className="text-sm w-full mt-6 h-[436px] flex flex-col" autoComplete="off">
            <div className="flex flex-col w-11/12 items-center m-auto h-full">
                <div className="w-11/12 mb-4">
                    <input 
                        type="email"
                        required 
                        className="form-input w-full rounded bg-[#32394b] border-1 border-solid border-[#7c7f87] text-white leading-5 text-sm active:bg-[#32394b] focus:bg-[#32394b]" 
                        placeholder="enter your e-mail" 
                        name="email"
                        autoComplete="new-email"
                    />
                </div>
                <div className="w-11/12 mb-4">
                    <input 
                        type="password" 
                        required 
                        className="form-input w-full rounded bg-[#32394b] border border-solid border-[#7c7f87] text-white leading-5 text-sm" 
                        placeholder="enter your password" 
                        name="password"
                        autoComplete="new-password"
                    />
                </div>
                <div className="w-11/12 mb-4">
                    <GitHubButton />
                </div>
                <div className="w-11/12 mb-4">
                    <GoogleButton />
                </div>
                <span className={clsx("text-red-600", {"hidden": !errorResponse})}>Invalid email or password</span>
                <div className="w-11/12 justify-self-end text-white flex grow flex-col-reverse text-lg">
                    <input
                        type="submit" 
                        className="bg-[#32394b] w-full py-4 leading-5 border border-solid border-[#7c7f87]" 
                        value={modeData[mode].buttonText} 
                    />
                </div>
            </div>
        </form>
    )
}

export default SigninForm
