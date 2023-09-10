import { createSlice } from '@reduxjs/toolkit'

const defaultValue = 0;

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    selectedList: defaultValue
  },
  reducers: {
    setSelectedList: ( state, action ) =>  {
      state.selectedList = action.payload
    },
    goBackToMainPage: (state) => {
      state.selectedList = defaultValue
    }
  }
})

export const { setSelectedList, goBackToMainPage } = pageSlice.actions

export default pageSlice.reducer
