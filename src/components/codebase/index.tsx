'use client'

import AddFile from "../codebaseButton/addfile"
import AddSnippet from "../codebaseButton/addsnippet"
import ResetCodeBaseButton from "../codebaseButton/resetButton"
import FileUploadForm from "./fileUploadForm"
import SnippetForm from "./snippetForm"


const CodeBase = () => {
    return (
      <div className="w-full ml-1 border-2 border-solid border-[#434242] rounded flex flex-col grow-0">
        <div className="flex justify-between w-full m-auto border-b-2 border-solid border-[#434242] bg-[#14171f] items-center h-16">
          <div className="ml-4 font-[signika-negative-medium] inline-block text-xl">Manage codebases</div>
          <ResetCodeBaseButton />
        </div>
        <div className="flex justify-start flex-col items-center pb-4 grow">
          <AddFile />
          <FileUploadForm />
          <AddSnippet />
          <SnippetForm />
        </div>
      </div>
    )
}

export default CodeBase