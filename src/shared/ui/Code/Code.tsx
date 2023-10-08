import React from 'react'
import styles from './Code.module.scss'
import cn from 'classnames'
import { Button } from '../Button/Button'
import { AiOutlineCopy as CopyIcon } from 'react-icons/ai'

interface CodeProps {
  className?: string
  code: string
}

export const Code = React.memo(({ code, className }: CodeProps) => {
  const onCopy = () => {
    window.navigator.clipboard.writeText(code)
  }

  return (
    <pre className={cn(styles.code, className)}>
      <Button onClick={onCopy} className={styles.copyButton}>
        <CopyIcon />
      </Button>
      <code>
        {code}
      </code>
    </pre>
  )
})
