import React, { memo } from 'react'
import { Typography } from 'shared/ui/Typography/Typography'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
  getProfileData,
  getProfileForm,
  getProfileIsEdit,
  profileActions,
  updateProfileData,
  validateProfileData
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack'

export const ProfilePageHeader = memo(() => {
  const isEdit = useSelector(getProfileIsEdit)
  const profileForm = useSelector(getProfileForm)

  const dispatch = useAppDispatch()

  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)

  const canEdit = authData?.id === profileData?.id

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
    <HStack justify="between">
      <Typography variant="heading">Профиль</Typography>

      {canEdit && (
        <HStack>
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
        </HStack>
      )}

    </HStack>
  )
})
