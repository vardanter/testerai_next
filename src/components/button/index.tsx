import { clsx } from 'clsx'

export type PropTypes = {
    className?: string
    name: string
    value: string
    onClick: () => void
}

const Button = ({
    name,
    value,
    className,
    onClick
}: PropTypes) => {
    return <input type="button" name={name} value={value} className={clsx(className, 'cursor-pointer')} onClick={onClick}/>
}

export default Button