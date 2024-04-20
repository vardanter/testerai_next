import clsx from "clsx"
import Link from "next/link"
import SigninForm from "./auth_form"

type OwnPropTypes = {
    mode?: 'login' | 'signup'
}

const Authorization = ({mode = 'login'}: OwnPropTypes) => {
    
    return (
        <div className="w-[400px] m-auto">
            <div className="flex justify-around w-full text-white text-lg font-[signika-negative-light]">
                <Link href="/signup" className={clsx({"border-none": mode === 'login', "border-b-2 border-solid border-grey": mode !== 'login', })}>Sing Up</Link>
                <Link href="/login" className={clsx({"border-none": mode === 'signup', "border-b-2 border-solid border-grey": mode !== 'signup', })}>Log in</Link>
            </div>
            <div className="grow">
                <SigninForm mode={mode} />
            </div>
        </div>
    )
}

export default Authorization