import React, { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { AsyncReducer, type ReducerList } from '@/shared/lib/components/AsyncReducer/AsyncReducer'
import {
  getProfileData, getProfileError,
  getProfileForm,
  getProfileIsEdit,
  getProfileLoading, getProfileValidationForm
} from '../../model/selectors/editableProfileCardSelectors'
import { profileReducer, profileActions } from '../../model/slice/profileSlice'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { type Profile, ProfileCard } from '@/entities/Profile'
import {
  EditableProfileCardHeader
} from '../EditableProfileCardHeader/EditableProfileCardHeader'

const reducers: ReducerList = {
  profile: profileReducer
}

interface EditableProfileCardProps {
  id: string
}

export const EditableProfileCard = memo(({ id }: EditableProfileCardProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id && __ENVIRONMENT__ === 'web') {
      dispatch(fetchProfileData(id))
    }
  }, [])

  const profileForm = useSelector(getProfileForm)
  const profileData = useSelector(getProfileData)
  const isLoading = useSelector(getProfileLoading)
  const isEdit = useSelector(getProfileIsEdit)
  const error = useSelector(getProfileError)
  const validationForm = useSelector(getProfileValidationForm)

  const handleFormChange = useCallback((profile: Partial<Profile>): void => {
    dispatch(profileActions.updateProfile(profile))
  }, [])

  return (
    <AsyncReducer reducers={reducers}>
      <EditableProfileCardHeader />
      <ProfileCard
        avatar={profileData?.avatar}
        isEdit={isEdit}
        formChange={handleFormChange}
        profile={profileForm}
        validationForm={validationForm}
        isLoading={isLoading}
        error={error}
      />
    </AsyncReducer>
  )
})
