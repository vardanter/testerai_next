'use client'

import { uploadFile } from "@/app/lib/actions"
import { RootState } from "@/store"
import { useSelector } from "react-redux"

export default function FileUploadForm() {
    const isAddFileActive = useSelector((state: RootState) => state.codeBase.isAddFileActive)

    if (!isAddFileActive) {
        return null
    }

    return (
        <form action={uploadFile} className="" id="myFileForm">
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="large_size">Large file input</label>
            <input 
              className="
                block w-full text-lg border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400
                after:border-0 after:border-solid after:border-[#e5e7eb]
                before:border-0 before:border-solid before:border-[#e5e7eb]
              "
              id="large_size" 
              type="file"
              name="file"
            />
            <button
              type="submit"
              className="
                text-white bg-gray-700 hover:bg-gray-500 focus:ring-blue-800 focus:ring-blue-300 
                focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm 
                w-full px-5 py-2.5 mt-4 text-center 
              "
            >
            Upload File to Server
            </button>
        </form>
    )
}