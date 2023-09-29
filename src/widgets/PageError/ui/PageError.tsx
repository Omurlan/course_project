import React from 'react'
import { Button } from '@/shared/ui/Button/Button'

export const PageError = () => {
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
