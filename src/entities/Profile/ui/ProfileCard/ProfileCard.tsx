import React from 'react'
import styles from './ProfileCard.module.scss'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData'
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError'
import { Typography } from 'shared/ui/Typography/Typography'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {

}

export const ProfileCard: React.FC<ProfileCardProps> = () => {
  const profile = useSelector(getProfileData)
  const isLoading = useSelector(getProfileLoading)
  const error = useSelector(getProfileError)

  return (
    <div className={cn(styles.profileCard)}>
      <div className={styles.header}>
        <Typography variant="heading">Профиль</Typography>
      </div>
      <div className={styles.profileData}>
        <Input value={profile?.first} placeholder="Имя" />
        <Input value={profile?.lastname} placeholder="Фамилия" />
        <Button disabled={isLoading}>Редактировать</Button>
      </div>
    </div>
  )
}
