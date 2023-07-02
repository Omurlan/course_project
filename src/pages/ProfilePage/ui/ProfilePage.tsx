import React, { useEffect } from 'react'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { Typography } from 'shared/ui/Typography/Typography'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

const reducers: ReducerList = {
  profile: profileReducer
}

interface ProfilePageProps {

}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // @ts-expect-error woerow
    dispatch(fetchProfileData())
  }, [])

  return (
    <AsyncReducer reducers={reducers} destroyOnUnmount>
      <ProfileCard />
    </AsyncReducer>

  )
}

export default ProfilePage
