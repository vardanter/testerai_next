'use client'

import clsx from "clsx"
import Link from "next/link"
import { ReactSVG } from "react-svg"

type PropTypes = {
    children?: React.ReactNode
    className?: string
}

const Header = ({children, className}: PropTypes) => (
    <div className={clsx("flex justify-between", `${className}`)}>
        <Link href="/" className="ml-3 h-14 flex items-center justify-center">
            <ReactSVG
                src="/static/svg/logo.svg"
                className="relative mr-0.5 text-sky-500"
            />
            <span className="font-[signika-negative-medium] text-lg">Tester Ai</span>
        </Link> 
        {children}       
    </div>
)

export default Header