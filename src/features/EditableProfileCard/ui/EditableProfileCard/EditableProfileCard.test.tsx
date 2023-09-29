import { renderWithWrapper, type renderWithWrapperOptions } from '@/shared/lib/tests/renderWithWrapper/renderWithWrapper'
import { EditableProfileCard } from './EditableProfileCard'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { profileReducer } from '../../model/slice/profileSlice'
import { type Profile } from '@/entities/Profile'
import { Country, Currency } from '@/shared/const/common'
import { $api } from '@/shared/api/api'

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 20,
  currency: Currency.USD,
  country: Country.Kazakhstan,
  city: 'Moscow',
  avatar: 'rowriworwireowriwr',
  username: 'testUsername'
}

const options: renderWithWrapperOptions = {
  initialState: {
    profile: {
      isEdit: false,
      data: profile,
      form: profile
    },
    user: {
      authData: {
        id: '1',
        username: 'admin'
      }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
}

const EDITABLE_PREFIX = 'EditableProfileCardHeader'
const PROFILE_PREFIX = 'ProfileCard'
const editButtonId = `${EDITABLE_PREFIX}.EditButton`
const cancelButtonId = `${EDITABLE_PREFIX}.CancelButton`
const saveButtonId = `${EDITABLE_PREFIX}.SaveButton`
const lastnameId = `${PROFILE_PREFIX}.lastname`
const firstnameId = `${PROFILE_PREFIX}.first`

describe('features/EditableProfileCard', () => {
  test('Toggle readonly mode', async () => {
    renderWithWrapper(<EditableProfileCard id="1" />, options)

    await userEvent.click(screen.getByTestId(editButtonId))
    expect(screen.getByTestId(cancelButtonId)).toBeInTheDocument()
  })
  test('Cancel edit', async () => {
    renderWithWrapper(<EditableProfileCard id="1" />, options)

    await userEvent.click(screen.getByTestId(editButtonId))

    const lastname = screen.getByTestId(lastnameId)
    const firstname = screen.getByTestId(firstnameId)

    await userEvent.clear(firstname)
    await userEvent.clear(lastname)
    await userEvent.type(lastname, 'testLastname')
    await userEvent.type(firstname, 'testFirstname')

    expect(lastname).toHaveValue('testLastname')
    expect(firstname).toHaveValue('testFirstname')

    await userEvent.click(screen.getByTestId(cancelButtonId))

    expect(lastname).toHaveValue('admin')
    expect(firstname).toHaveValue('admin')
  })
  test('handle validation error', async () => {
    renderWithWrapper(<EditableProfileCard id="1" />, options)

    await userEvent.click(screen.getByTestId(editButtonId))

    await userEvent.clear(screen.getByTestId(firstnameId))

    await userEvent.click(screen.getByTestId(saveButtonId))

    expect(screen.getByText('Имя, только буквы без пробела')).toBeInTheDocument()
  })
  test('success edit', async () => {
    const mockPutReq = jest.spyOn($api, 'put')

    renderWithWrapper(<EditableProfileCard id="1" />, options)

    await userEvent.click(screen.getByTestId(editButtonId))
    await userEvent.type(screen.getByTestId(firstnameId), 'user')

    await userEvent.click(screen.getByTestId(saveButtonId))

    expect(mockPutReq).toHaveBeenCalled()
  })
})
