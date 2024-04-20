'use client'

import { signIn } from "next-auth/react"

export default function GoogleButton() {
    return (
        <div
            className="
            form-input rounded bg-[#32394b] border border-solid border-[#7c7f87] 
            text-white leading-5 text-sm transition-all duration-500
            text-center w-full block relative pointer
            hover:bg-[#1b2132]
            "
        >
            {/* <div className="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="filled_black" data-text="continue_with" data-size="large" data-width="304" data-logo_alignment="left">
                <div className="S9gUrf-YoZ4jf relative">
                    <div> */}
                        <div role="button" aria-labelledby="button-label"
                            className="w-full" onClick={() => signIn('google', {callbackUrl: '/chat'})}
                        >
                            {/* <div className="nsm7Bb-HzV7m-LgbsSe-MJoBVe"></div> */}
                            <div className="flex flex-row h-full w-full relative justify-between items-center">
                                {/* <div className="">
                                    <div className="nsm7Bb-HzV7m-LgbsSe-Bz112c">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="LgbsSe-Bz112c">
                                            <g>
                                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                                <path fill="none" d="M0 0h48v48H0z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div> */}
                                <span className="nsm7Bb-HzV7m-LgbsSe-BPrWId justify-self-center self-center w-full">Google</span>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <iframe src="https://accounts.google.com/gsi/button?type=standard&amp;shape=rectangular&amp;theme=filled_black&amp;text=continue_with&amp;size=large&amp;width=304&amp;logo_alignment=left&amp;client_id=283997917725-pgrtroaln3mj9arcartodfud2arr6oe4.apps.googleusercontent.com&amp;iframe_id=gsi_39752_901310&amp;as=mkhj6wZ8Ivn3IoMrZmaBYw"
                    allow="identity-credentials-get" id="gsi_39752_901310" title="Кнопка &quot;Войти с аккаунтом Google&quot;" 
                    className="block relative top-0 left-0 h-0 w-0 border-none"></iframe> */}
                {/* </div>
            </div> */}
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30" height="30" viewBox="0 0 16 16" data-icon="bi:google"
            data-width="30" data-height="30" className="absolute left-1 top-1 text-[#e1dfdf]">
                <path fill="currentColor" d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301c1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"></path>
            </svg>
            
        </div>
    )
}