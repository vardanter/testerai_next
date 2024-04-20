'use client'

import Button from "@/components/button"
import CodeBaseButton from ".."
import { ReactSVG } from "react-svg"
import { useDispatch, useSelector } from "react-redux"
import { addSnippet } from "@/store/slices/codeBaseSlice"
import { RootState } from "@/store"

const AddSnippet = () => {
    const dispatch = useDispatch()
    const isCodeBaseActive = useSelector((state: RootState) => state.codeBase.isCodeBaseActive)

    const onClick = () => {
        dispatch(addSnippet())
    }

    if (!isCodeBaseActive) {
        return null
    }

    return (
        <CodeBaseButton onClick={onClick}>
            <ReactSVG
                src="/static/svg/plus.svg"
                className="mr-2 text-white"
            />
            <Button name="add_file" value="Add Snippet" onClick={onClick} className="border-0" />
        </CodeBaseButton>
    )
}

export default AddSnippet