import { type StateSchema } from 'app/providers/StoreProvider'
import { type AsyncThunkAction } from '@reduxjs/toolkit'

type ActionCreatorType<Return, Arg> = (arg: Arg) => AsyncThunkAction<Return, Arg, any>

export class TestAsyncThunk<Return, Arg> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreatorType<Return, Arg>

  // actionCreator = createAsyncThunk
  constructor (actionCreator: ActionCreatorType<Return, Arg>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk (arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, undefined)

    return result
  }
}
