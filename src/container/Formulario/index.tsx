import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Aside, BotaoSalvar, CampoForm, Efeito, Form } from './styles'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    const telefoneNumero = parseInt(telefone, 10)

    if (isNaN(telefoneNumero)) {
      alert('Por favor, insira um número de telefone válido')
      return
    }

    dispatch(
      cadastrar({
         nome,
         email,
         telefone: telefoneNumero,
         finalizado: false
      })
    )
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <Efeito>
      <p>Cadastre um novo contato</p>
      <Aside>
        <Form onSubmit={cadastrarTarefa}>
          <CampoForm
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            type="text"
            placeholder="Nome:"
          />
          <CampoForm
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            type="email"
            placeholder="E-mail:"
          />
          <CampoForm
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
            type="tel"
            placeholder="Telefone:"
          />
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </Form>
      </Aside>
   </Efeito>
  )
}

export default Formulario
