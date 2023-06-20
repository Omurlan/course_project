import React, { type ComponentProps } from 'react'
import cn from 'classnames'

interface InputProps extends ComponentProps<'input'> {

}

export const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input className={cn(styles.input, className)} {...rest} />
  )
}

export default Input
