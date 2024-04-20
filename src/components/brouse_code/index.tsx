'use client'

import { ReactSVG } from "react-svg"
import Button from "../button"

export type PageProps = {
    onClick?: () => void
}

const BrouseCode = ({ onClick }: PageProps) => {
    const onClickHandle = () => {
        console.log("Brouse Code handler")
        if (onClick) {
            onClick()
        }
    }

    return (
        <div className="inline-block relative">
            <ReactSVG
                className="absolute top-2.5 left-1.5"
                src="/static/svg/brouse_code.svg" 
            />
            <Button
                className="bg-[#2f3238] border-none rounded cursor-pointer mr-4 py-[10px] px-[30px] font-[signika-negative-medium] text-sm"
                value="Browse code"
                name="brouse_code_button"
                onClick={onClickHandle}
            />
        </div>
    )
}

export default BrouseCode