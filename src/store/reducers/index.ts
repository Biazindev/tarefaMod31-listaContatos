import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './tarefas'
import api from '../../services/api'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
