import React from 'react'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { profileReducer } from 'entities/Profile'
import { Typography } from 'shared/ui/Typography/Typography'

const reducers: ReducerList = {
  profile: profileReducer
}

interface ProfilePageProps {

}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  return (
    <AsyncReducer reducers={reducers} destroyOnUnmount>
      <Typography variant="heading">Профиль</Typography>
    </AsyncReducer>

  )
}

export default ProfilePage
