'use client'

import Button from "@/components/button"
import CodeBaseButton from ".."
import { ReactSVG } from "react-svg"
import { useDispatch, useSelector } from "react-redux"
import { addFile } from "@/store/slices/codeBaseSlice"
import { RootState } from "@/store"

const AddFile = () => {
    const dispatch = useDispatch()
    const isCodeBaseActive = useSelector((state: RootState) => state.codeBase.isCodeBaseActive)

    const onClick = () => {
        dispatch(addFile())
    }

    if (!isCodeBaseActive) {
        return null
    }

    return (
        <CodeBaseButton onClick={onClick}>
            <ReactSVG
                className="mr-2 text-white"
                src="/static/svg/plus.svg"
            />
            <Button name="add_file" value="Add File" onClick={onClick} className="border-0" />
        </CodeBaseButton>
    )
}

export default AddFile