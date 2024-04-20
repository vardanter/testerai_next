'use client'

import { RootState } from "@/store"
import { useSelector } from "react-redux"

export default function SnippetForm() {
    const isAddSnippetActive = useSelector((state: RootState) => state.codeBase.isAddSnippetActive)

    if (!isAddSnippetActive) {
        return null
    }

    return (
        <form className="block border-2 border-solid border-[#464e61] w-[98%] rounded-lg margin-auto mt-4 flex flex-col grow">
          <div className="flex flex-row justify-between items-center mx-4 py-4 max-md:flex-col">
            <select name="languages" className="
                border text-sm rounded-lg w-48
                focus:ring-blue-500 focus:border-blue-500 block lg:max-2xl:w-auto p-2.5 
                bg-gray-700 border-gray-600 placeholder-gray-400 text-white max-md:w-full max-md:mb-2
            ">
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Node.Js">Node.Js</option>
              <option value="Java">Java</option>
              <option value="PHP">PHP</option>
              <option value="C++">C++</option>
              <option value="R">R</option>
              <option value="Bash">Bash</option>
              <option value="C#">C#</option>
              <option value="GO">Go</option>
              <option value="Perl">Perl</option>
              <option value="Scala">Scala</option>
              <option value="Haskell">Haskell</option>
              <option value="Rust">Kotlin</option>
              <option value="SQl">SQL</option>
              <option value="SQl">Swift</option>
            </select>
            <input type="text" placeholder="snippet name"
             className="
                border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 
                bg-gray-700 border-gray-600 placeholder-gray-400 text-white w-80 lg:max-2xl:w-auto
                max-md:w-full max-md:mb-2
             " data-sider-insert-id="f195e324-b078-4e13-b78f-991186771a73" data-sider-select-id="ee7e1c07-3145-49a5-918c-3b4e2a26905f"/>
            <button 
                type="submit" 
                className="
                    text-white focus:ring-4 focus:outline-none font-medium w-48
                    rounded-lg text-sm px-5 py-2.5 text-center 
                    bg-gray-700 hover:bg-gray-500 focus:ring-blue-800 focus:ring-blue-300 lg:max-2xl:w-auto
                    max-md:w-full 
                "
            >
                Add
            </button>
            <a className="yourcodebtn2 hidden">Please login</a>
          </div>
          <div className="mx-4 mb-4 flex justify-center items-center grow">
            <textarea
                name="code" 
                className="
                    block p-2.5 w-full margin-auto h-full text-sm rounded-lg border border-gray-300
                    focus:ring-blue-500 focus:border-blue-500 resize-none
                    bg-gray-700 border-gray-600 placeholder-gray-400 text-white
                " 
                placeholder="# Paste your code here"
            ></textarea>
          </div>
        </form>
    )
}