import clsx from "clsx"
import BrouseCode from "../brouse_code"
import Link from "next/link"
import { checkMessage, updateChatData } from "@/app/lib/actions"
import { MESSAGE } from "@/app/types"
import Highlight from 'react-highlight'
import { SubmitButton } from "./submitButton"
import { KeyboardEvent, useEffect, useMemo, useRef, useState } from "react"
import { openWebSocket } from "@/app/lib/websocket"

export type PageProps = {
    onBrowseCodeClick?: () => void
    className?: string
    accessToken?: string
    messages: MESSAGE[]
}

const Asistant = ({ onBrowseCodeClick, className, accessToken, messages }: PageProps) => {
  const [waitAnswer, setWaitAnswer] = useState<boolean>(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  
  const websocket = useMemo(() => {
    return openWebSocket(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) {
      setWaitAnswer(false)
    }
  }, [accessToken, messages])

  useEffect(() => {
    scrollToTop()
  }, [messages, waitAnswer])

  useEffect(() => {
    if (websocket) {
      websocket.onmessage = (event) => {
        updateChatData()
        setWaitAnswer(false)
      }
    }
  }, [websocket])

  const scrollToTop = () => {
    if (messagesContainerRef && messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }    

  const onSubmit = async (formData: FormData) => {
    setWaitAnswer(true)
    await checkMessage(formData)
    if (formRef?.current) {
      formRef.current.reset()
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      (event.currentTarget.form as HTMLFormElement).requestSubmit()
      event.preventDefault()
    }
  }

  return (
      <div className={clsx(
          "rounded bg-[#181b26] h-[85vh] min-w-[42%] overflow-hidden border-2 border-solid border-[#434242] flex flex-col basis-5/12",
          className
      )}>
          <div className="flex justify-between w-full m-auto border-b-2 border-solid border-[#434242] bg-[#14171f] items-center h-16">
            <div className="ml-4 font-[signika-negative-medium] inline-block text-xl">Ai Asistant</div>
            <BrouseCode onClick={onBrowseCodeClick} />
          </div>
          <div ref={messagesContainerRef} className="flex flex-col justify-between items-center h-5/6 overflow-y-auto text-sm">
            <div className="bg-black py-4 pr-2.5 pl-5 w-11/12 m-auto rounded-lg mt-4">
                {`I'm here to help you understand your codebase. Get started by
                importing a GitHub repository or a code snippet. You can ask
                me to explain how something works, where something is
                implemented, or even how to debug an error.`}
            </div>
            <ul className="flex items-flex-end flex-col w-11/12 py-4">
              {messages.map((message) => {
                return (
                  <li
                    key={message.id}
                    className={
                      clsx(
                        "code w-4/5 min-w-36 rounded-lg mt-5 break-words overflow-hidden", 
                        {
                          "self-start": message.question_id, 
                          "self-end": !message.question_id
                        }
                      )
                    }
                  >
                    <Highlight>
                      {message.text}
                    </Highlight>
                  </li>
                )
              })}
              
            </ul>
            {
              waitAnswer && (
                <div className="w-11/12 rounded-lg mt-5 mb-3 text-center bg-[#7d7d7d33] p-2">
                  Please wait...
                </div>
              )
            }
          </div>
          <form ref={formRef} id="message_form" className="flex justify-space-around shrink-0 items-center px-1 my-1" action={onSubmit}>
            <textarea
              className="bg-black border border-solid border-[#5b5a61] w-full mr-1 rounded-lg resize-none text-sm h-12"
              name="message"
              placeholder="Your code..."
              rows={2}
              form="message_form"
              onKeyDown={onKeyDown}
              required 
              disabled={waitAnswer}
            />
            {!accessToken && (
            <div className="flex justify-center items-center">
                <Link
                    href="/login"
                    className="bg-[#6f797c] border-none rounded-lg h-12 px-[40px] content-center"
                >Login</Link>
            </div>
            )}
            {accessToken && <SubmitButton disabled={waitAnswer} />}
        </form>
        </div>
  )
}

export default Asistant