import React, { memo, useCallback } from 'react'
import { Typography } from '@/shared/ui/Typography'
import { Button } from '@/shared/ui/Button'
import { useSelector } from 'react-redux'
import {
  getProfileData,
  getProfileForm,
  getProfileIsEdit
} from '../../model/selectors/editableProfileCardSelectors'
import { profileActions } from '../../model/slice/profileSlice'
import { validateProfileData } from '../../model/services/validateProfileData/validateProfileData'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from '@/entities/User'
import { HStack } from '@/shared/ui/Stack'

const TEST_ID_PREFIX = 'EditableProfileCardHeader'

export const EditableProfileCardHeader = memo(() => {
  const isEdit = useSelector(getProfileIsEdit)
  const profileForm = useSelector(getProfileForm)

  const dispatch = useAppDispatch()

  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)

  const canEdit = authData?.id === profileData?.id

  const handleEdit = useCallback(() => {
    dispatch(profileActions.startEdit())
  }, [])

  const handleCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [])

  const submitEdit = () => {
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
          {!isEdit && (
            <Button
              data-testid={`${TEST_ID_PREFIX}.EditButton`}
              variant={isEdit ? 'neutral' : 'default'}
              onClick={handleEdit}
            >
              Редактировать
            </Button>
          )}

          {isEdit && (
            <>
              <Button data-testid={`${TEST_ID_PREFIX}.SaveButton`} onClick={submitEdit}>
                Сохранить
              </Button>

              <Button
                data-testid={`${TEST_ID_PREFIX}.CancelButton`}
                variant={isEdit ? 'neutral' : 'default'}
                onClick={handleCancel}
              >
                Отмена
              </Button>
            </>
          )}
        </HStack>
      )}
    </HStack>
  )
})
