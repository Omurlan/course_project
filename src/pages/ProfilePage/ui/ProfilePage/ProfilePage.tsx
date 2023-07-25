import React, { useCallback, useEffect } from 'react'
import styles from './ProfilePage.module.scss'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import {
  fetchProfileData, getProfileData,
  getProfileError, getProfileForm, getProfileIsEdit,
  getProfileLoading, type Profile, profileActions,
  ProfileCard,
  profileReducer
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader'
import { getProfileValidationForm } from 'entities/Profile'
import { useParams } from 'react-router-dom'

const reducers: ReducerList = {
  profile: profileReducer
}

interface ProfilePageProps {

}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const profileForm = useSelector(getProfileForm)
  const profileData = useSelector(getProfileData)
  const isLoading = useSelector(getProfileLoading)
  const isEdit = useSelector(getProfileIsEdit)
  const error = useSelector(getProfileError)
  const validationForm = useSelector(getProfileValidationForm)

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  }, [])

  const handleFormChange = useCallback((profile: Partial<Profile>): void => {
    dispatch(profileActions.updateProfile(profile))
  }, [])

  return (
    <AsyncReducer reducers={reducers}>
      <div className={styles.profilePage}>
        <ProfilePageHeader />

        <ProfileCard
          avatar={profileData?.avatar}
          isEdit={isEdit}
          formChange={handleFormChange}
          profile={profileForm}
          validationForm={validationForm}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </AsyncReducer>

  )
}

export default ProfilePage
