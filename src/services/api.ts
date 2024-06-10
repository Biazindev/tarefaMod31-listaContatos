import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Formulario } from '../App'
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080'
  }),
  endpoints: (builder) => ({
    getContatos: builder.query<Formulario[], void>({
      query: () => '/api/clientes'
    })
  })
})

export const { useGetContatosQuery } = api
export default api
