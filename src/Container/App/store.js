import { configureStore } from '@reduxjs/toolkit'
import history from './history'
import createRootReducer from './reducer'
import sagaMiddleware from './saga'

const reducer = createRootReducer(history)

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
})

export default store