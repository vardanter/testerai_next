'use client'

export type PropTypes = {
    children: React.ReactNode
    onClick: () => void
}

const CodeBaseButton = ({children, onClick}: PropTypes) => {
    return (
        <div onClick={onClick} className="bg-[#14171f] border border-solid border-white rounded-lg h-20 w-80 flex flex-row justify-center items-center cursor-pointer mt-7">
            {children}
        </div>
    )
}

export default CodeBaseButton