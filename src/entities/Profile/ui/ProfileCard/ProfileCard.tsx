import React, { type ChangeEvent, useCallback } from 'react'
import styles from './ProfileCard.module.scss'
import cn from 'classnames'
import { Typography } from 'shared/ui/Typography/Typography'
import { Input } from 'shared/ui/Input/Input'
import { type Profile } from '../../model/types/profile'
import { type ChangeEventSelect, Select, type SelectOption } from 'shared/ui/Select/Select'
import { Country, Currency } from 'shared/const/common'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { type ValidationForm } from 'shared/lib/validation/validateForm'

interface ProfileCardProps {
  profile?: Profile
  isLoading: boolean
  error: string | null
  validationForm: ValidationForm | undefined
  isEdit?: boolean
  avatar?: string
  formChange: (profile: Partial<Profile>) => void
}

const currencyOptions = Object.keys(Currency).map((key) => ({ value: key, title: key }))
const countryOptions = Object.keys(Country).map((key) => ({ value: key, title: key }))

interface Field {
  name: keyof Profile
  placeholder: string
  label: string
  errorMessage: string
  'data-testid'?: string
  type: 'input' | 'select'
  options?: SelectOption[]
}

export const profileFields: Field[] = [
  {
    name: 'first',
    label: 'Имя',
    placeholder: 'Имя',
    errorMessage: 'Имя, только буквы без пробела',
    type: 'input'
  },
  {
    name: 'lastname',
    label: 'Фамилия',
    placeholder: 'Фамилия',
    errorMessage: 'Фамилия, только буквы без пробела',
    type: 'input'
  },
  {
    name: 'age',
    label: 'Возраст',
    placeholder: 'Возраст',
    errorMessage: 'Укажите корректный возраст (8-80)',
    type: 'input'
  },
  {
    name: 'avatar',
    label: 'Аватар (url)',
    placeholder: 'Аватар (url)',
    errorMessage: 'Укажите ссылку на изображение',
    type: 'input'
  },
  {
    name: 'currency',
    label: 'Валюта',
    placeholder: 'Валюта',
    type: 'select',
    errorMessage: 'Выберите вашу валюту',
    options: currencyOptions
  },
  {
    name: 'country',
    label: 'Страна',
    placeholder: 'Страна',
    type: 'select',
    errorMessage: 'Выберите свою страну',
    options: countryOptions
  }
]

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, validationForm, avatar, isLoading, error, isEdit, formChange }) => {
  const handleChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    formChange({ [event.target.name]: event.target.value })
  }, [])

  const handleChangeSelect = useCallback((event: ChangeEventSelect): void => {
    formChange({ [event.name]: event.value })
  }, [])

  if (isLoading) {
    return (
      <div className={cn(styles.profileCard)}>
        <Typography variant="heading">Загрузка</Typography>
      </div>
    )
  }

  if (error) {
    return (
      <div className={cn(styles.profileCard)}>
        <Typography color="error" variant="heading">Произошла ошибка {error}</Typography>
      </div>
    )
  }

  return (
    <div className={cn(styles.profileCard)}>
      <div className={styles.profileData}>
        <Avatar style={{ margin: '0 auto' }} src={avatar} alt="Аватар" />

        {profileFields.map(({ name, options, placeholder, label, type, errorMessage }) => {
          if (type === 'input') {
            return (
              <Input
                key={name}
                name={name}
                label={label}
                error={validationForm?.[name]}
                helperText={validationForm?.[name] ? errorMessage : ''}
                placeholder={placeholder}
                onChange={handleChangeInput}
                readOnly={!isEdit}
                value={profile?.[name]}
                data-testid={`ProfileCard.${name}`}
              />
            )
          }

          return (
            <Select
              key={name}
              name={name}
              onChange={handleChangeSelect}
              error={validationForm?.[name]}
              label={label}
              helperText={validationForm?.[name] ? errorMessage : ''}
              placeholder={placeholder}
              disabled={!isEdit}
              selected={profile?.[name] ? profile[name] as string : null}
              options={options ?? []}
              data-testid={`ProfileCard.${name}`}
            />
          )
        })}
      </div>
    </div>
  )
}
