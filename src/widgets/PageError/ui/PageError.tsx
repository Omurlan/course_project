import React from 'react'
import styles from './PageError.module.scss'
import Button from 'shared/ui/Button/Button'

interface PageErrorProps {
}

export const PageError: React.FC<PageErrorProps> = () => {
  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div className={styles.pageError}>
      <p>Произошла ошибка</p>
      <Button onClick={reloadPage}>
        Обновить страницу
      </Button>
    </div>
  )
}

export default PageError
