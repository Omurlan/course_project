import { type StateSchema } from 'app/providers/StoreProvider'
import { type AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { type AxiosStatic } from 'axios'

type ActionCreatorType<Return, Arg> = (arg: Arg) => AsyncThunkAction<Return, Arg, any>

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Return, Arg> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreatorType<Return, Arg>
  api: jest.MockedFunctionDeep<AxiosStatic>
  navigate: jest.MockedFn<any>

  // actionCreator = createAsyncThunk
  constructor (actionCreator: ActionCreatorType<Return, Arg>, state?: DeepPartial<StateSchema>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StateSchema)
    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  async callThunk (arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(
      this.dispatch,
      this.getState,
      { api: this.api, navigate: this.navigate })

    return result
  }
}
