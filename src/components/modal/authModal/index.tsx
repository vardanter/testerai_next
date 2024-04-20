'use client'

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import Modal from ".."

const AuthModal = ({children}: {children: React.ReactNode}) => {
    const router = useRouter()

    const closeModalHandler = () => {
        router.push('/chat')
        router.refresh()
    }
    
    return (
        <Modal onClose={closeModalHandler}>
            {children}
        </Modal>
    )
}

export default AuthModal