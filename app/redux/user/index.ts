import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  address: string
}
const initialState: IState = {
  address: ''
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAddress: (state, payload: PayloadAction<string>) => { state.address = payload.payload }
  }
})

export default userSlice.reducer
export const { setAddress } = userSlice.actions
