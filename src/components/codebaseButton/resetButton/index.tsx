'use client'

import { useDispatch, useSelector } from "react-redux"
import { reset } from "@/store/slices/codeBaseSlice"
import { RootState } from "@/store"
import clsx from "clsx"

const ResetCodeBaseButton = () => {
    const dispatch = useDispatch()
    const isCodeBaseActive = useSelector((state: RootState) => state.codeBase.isCodeBaseActive)

    const onClick = () => {
        dispatch(reset())
    }

    return (
        <div 
            onClick={onClick}
            className={clsx(
                "text-white bg-[#2f3238] cursor-pointer mr-4 py-3 px-6  border-0 rounded transition-all duration-500 max-md:py-1 max-md:px-2",
                {"opacity-0": isCodeBaseActive, "oppacity-100": !isCodeBaseActive}
            )}
        >
            manage codebase
        </div>
    )
}

export default ResetCodeBaseButton