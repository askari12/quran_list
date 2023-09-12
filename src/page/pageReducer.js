import { createSlice } from '@reduxjs/toolkit'

const defaultValue = 0;
export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    selectedList: defaultValue,
    quranList: []
  },
  reducers: {
    setSelectedList: ( state, action ) =>  {
      state.selectedList = action.payload
    },
    goBackToMainPage: (state) => {
      state.selectedList = defaultValue
    },
    setQuranList: (state, action) => {
      state.quranList = action.payload
    }
  }
})

export const { setSelectedList, goBackToMainPage, setQuranList } = pageSlice.actions

export default pageSlice.reducer
