import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      nome: 'Tiago Gofredo Biazin',
      email: 'tiago.biazin02@gmail.com',
      telefone: 17981716648,
      finalizado: true
    },
    {
      id: 2,
      nome: 'Luiz',
      email: 'luiz@gmail.com',
      telefone: 17981719900,
      finalizado: true
    },
    {
      id: 3,
      nome: 'Adriana',
      email: 'adriana@gmail.com',
      telefone: 17981719080,
      finalizado: true
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Nome já cadastrado!')
      } else {
        const novaTarefa: Tarefa = {
          ...action.payload,
          id: state.itens.length
            ? state.itens[state.itens.length - 1].id + 1
            : 1
        }
        state.itens.push(novaTarefa)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{
        id: number
        finalizado: boolean
      }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].finalizado = action.payload.finalizado
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
