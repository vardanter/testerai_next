'use client'

import { useState } from "react"
import Asistant from "../asistant"
import CodeBase from "../codebase"
import clsx from "clsx"
import { MESSAGE } from "@/app/types"

type Props = {
    accessToken?: string
    messages: MESSAGE[]
}

const Dashboard = ({accessToken, messages}: Props) => {
    const [showCodeBase, setShowCodeBase] = useState(true)
    const onBrowseCodeClick = () => {
        setShowCodeBase(!showCodeBase)
    }

    return (
        <>
            <Asistant
                accessToken={accessToken}
                messages={messages}
                onBrowseCodeClick={onBrowseCodeClick} 
                className={clsx({"grow": !showCodeBase, "grow-0": showCodeBase})} 
            />
            {showCodeBase && <CodeBase />}
        </>
    )
}

export default Dashboard