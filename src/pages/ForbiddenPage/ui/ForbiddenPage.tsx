import React from 'react'
import styles from './ForbiddenPage.module.scss'
import cn from 'classnames'
import { Typography } from 'shared/ui/Typography/Typography'
import { Page } from 'widgets/Page/Page'

interface ForbiddenPageProps {

}

export const ForbiddenPage: React.FC<ForbiddenPageProps> = () => {
  return (
    <Page>
      <Typography variant="heading">У вас нет доступа к этой странице</Typography>
    </Page>
  )
}
