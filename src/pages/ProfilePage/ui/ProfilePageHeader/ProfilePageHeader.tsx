import React, { memo } from 'react'
import styles from './ProfilePageHeader.module.scss'
import cn from 'classnames'
import { Typography } from 'shared/ui/Typography/Typography'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
  getProfileForm,
  getProfileIsEdit,
  profileActions,
  updateProfileData,
  validateProfileData
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface ProfilePageHeaderProps {

}

export const ProfilePageHeader = memo(() => {
  const isEdit = useSelector(getProfileIsEdit)
  const profileForm = useSelector(getProfileForm)

  const dispatch = useAppDispatch()

  const handleEdit = () => {
    if (isEdit) dispatch(profileActions.cancelEdit())
    else dispatch(profileActions.startEdit())
  }

  const submitEdit = (): void => {
    const validated = validateProfileData(profileForm)

    if (Object.keys(validated).length) {
      dispatch(profileActions.setValidationErrors(validated))
    } else {
      dispatch(updateProfileData())
    }
  }

  return (
    <div className={styles.profilePageHeader}>
      <Typography variant="heading">Профиль</Typography>

      <div className={styles.actions}>
        {isEdit && (
          <Button onClick={submitEdit}>
            Сохранить
          </Button>
        )}

        <Button
            variant={isEdit ? 'neutral' : 'default'}
            onClick={handleEdit}
        >
          {isEdit ? 'Отмена' : 'Редактировать'}
        </Button>
      </div>
    </div>
  )
})
