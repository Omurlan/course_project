import type { Profile } from '../../types/profile'
import { validateForm, type ValidationForm } from 'shared/lib/validation/validateForm'

export const validateProfileData = (profile?: Profile): ValidationForm<keyof Profile> => {
  if (!profile) {
    return {}
  }

  const { first, country, currency, avatar, username, age, lastname, city } = profile

  return validateForm<keyof Profile>([
    {
      value: first,
      field: 'first',
      pattern: /^[a-zA-Zа-яА-Я]+$/
    },
    {
      value: country,
      field: 'country',
      pattern: /[a-zA-Zа-яА-Я-]+/
    },
    {
      value: currency,
      field: 'currency',
      pattern: /[a-zA-Zа-яА-Я]+/
    },
    {
      value: avatar,
      field: 'avatar',
      pattern: /[a-zA-Zа-яА-Я]+/
    },
    {
      value: username,
      field: 'username',
      pattern: /^[a-zA-Zа-яА-Я]+$/
    },
    {
      value: age,
      field: 'age',
      number: {
        max: 80,
        min: 8
      }
    },
    {
      value: lastname,
      field: 'lastname',
      pattern: /^[a-zA-Zа-яА-Я]+$/
    },
    {
      value: city,
      field: 'city',
      pattern: /[a-zA-Zа-яА-Я-]+/
    }
  ])
}
