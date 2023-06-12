import React from 'react'
import Button from 'shared/ui/Button/Button'

interface PageErrorProps {
}

export const PageError: React.FC<PageErrorProps> = () => {
  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div>
      <p>Произошла ошибка</p>
      <Button onClick={reloadPage}>
        Обновить страницу
      </Button>
    </div>
  )
}

export default PageError
