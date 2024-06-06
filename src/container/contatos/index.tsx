import React, { useState } from 'react'
import * as S from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store/reducers'
import { editar, remover } from '../../store/reducers/tarefas'
import Tarefa from '../../models/Tarefa'

const ListaContatos = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)
  const dispatch = useDispatch()
  const [editando, setEditando] = useState<number | null>(null)
  const [tarefaEditada, setTarefaEditada] = useState<Tarefa | null>(null)

  const handleEdit = (tarefa: Tarefa) => {
    setEditando(tarefa.id)
    setTarefaEditada(tarefa)
  }

  const handleSave = () => {
    if (tarefaEditada) {
      dispatch(editar(tarefaEditada))
      setEditando(null)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (tarefaEditada) {
      setTarefaEditada({
        ...tarefaEditada,
        [e.target.name]: e.target.value
      })
    }
  }

  return (
    <S.Main>
      <S.Titulo>Meus contatos</S.Titulo>
      <div>
      <S.Center>
        {tarefas.map((tarefa: Tarefa) => (
          <li key={tarefa.id}>
            {editando === tarefa.id ? (
              <S.Aside>
                <S.Campo
                  type="text"
                  name="nome"
                  value={tarefaEditada?.nome || ''}
                  onChange={handleChange}
                />
                <S.Campo
                  type="text"
                  name="email"
                  value={tarefaEditada?.email || ''}
                  onChange={handleChange}
                />
                <S.Campo
                  type="text"
                  name="telefone"
                  value={tarefaEditada?.telefone || ''}
                  onChange={handleChange}
                />
                <S.BotaoSalvar onClick={handleSave}>Salvar</S.BotaoSalvar>
                <S.BotaoCancelarRemover onClick={() => setEditando(null)}>Cancelar</S.BotaoCancelarRemover>
              </S.Aside>
            ) : (
              <S.List>
                <p>Nome: {tarefa.nome}</p>
                <p>Email: {tarefa.email}</p>
                <p>Telefone: {tarefa.telefone}</p>
                <S.BotaoCancelarRemover onClick={() => dispatch(remover(tarefa.id))}>Remover</S.BotaoCancelarRemover>
                <S.Botao onClick={() => handleEdit(tarefa)}>Editar</S.Botao>
              </S.List>
            )}
          </li>
        ))}
      </S.Center>
      </div>
    </S.Main>
  )
}

export default ListaContatos
