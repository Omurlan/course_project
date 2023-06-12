import React from 'react'
import styles from './NotFoundPage.module.scss'
import cn from 'classnames'

interface NotFoundPageProps {

}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className={styles.notFound}>
      <h1>Страница не найдена</h1>
    </div>
  )
}

export default NotFoundPage
