import React from 'react'
import styles from './ProfilePage.module.scss'
import { Page } from '@/widgets/Page/Page'
import { EditableProfileCard } from '@/features/EditableProfileCard'
import { useParams } from 'react-router-dom'
import { Typography } from '@/shared/ui/Typography/Typography'

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <Typography variant="heading">Профиль не найден</Typography>
  }

  return (
    <Page className={styles.profilePage}>
      <EditableProfileCard id={id} />
    </Page>
  )
}

export default ProfilePage
