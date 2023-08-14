import { Country, Currency } from 'shared/const/common'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { type Profile } from '../../types/profile'

const wrongForm: Profile = {
  first: '',
  lastname: '',
  currency: Currency.RUB,
  avatar: '',
  city: '',
  age: 90,
  country: Country.USA,
  username: ''
}

const rightForm: Profile = {
  first: 'Name',
  lastname: 'Lastname',
  currency: Currency.RUB,
  city: 'Moscow',
  avatar: 'https://ru.wikipedia.org/wiki/Губка_Боб_Квадратные_Штаны_%28персонаж%29',
  age: 21,
  country: Country.USA,
  username: 'Omurlan'
}

describe('validateProfileData.test', () => {
  test('wrong form', () => {
    const result = validateProfileData(wrongForm)

    expect(result).toEqual({
      first: true,
      lastname: true,
      avatar: true,
      city: true,
      age: true,
      username: true
    })
  })
  test('right form', () => {
    const result = validateProfileData(rightForm)

    expect(result).toEqual({})
  })
})
