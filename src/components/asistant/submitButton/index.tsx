"use client"

import { useFormStatus } from "react-dom"

export function SubmitButton({disabled}: {disabled: boolean}) {
    const { pending } = useFormStatus()
   
    return (
        <input className="bg-[#6f797c] border-none rounded-lg h-12 px-[40px] cursor-pointer" type="submit" value="CHECK" disabled={pending || disabled} />
    )
  }

export default SubmitButton