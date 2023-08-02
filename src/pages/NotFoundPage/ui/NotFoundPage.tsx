import React from 'react'
import styles from './NotFoundPage.module.scss'
import cn from 'classnames'
import { Page } from 'widgets/Page/Page'

interface NotFoundPageProps {

}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <Page className={styles.notFound}>
      <h1>Страница не найдена</h1>
    </Page>
  )
}

export default NotFoundPage
