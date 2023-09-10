import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './page/pageReducer'

export default configureStore({
  reducer: {
    page: pageReducer
  }
})
