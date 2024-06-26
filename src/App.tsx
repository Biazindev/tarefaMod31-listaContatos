import EstiloGlobal from './styles'
import ListaContatos from './container/contatos'
import Formulario from './container/Formulario'
import { Provider } from 'react-redux'
import store from './store/reducers'
import { Key } from 'react'

export type Formulario = {
  nome: string[]
  email: string[]
  telefone: number[]
}
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <ListaContatos />
      <Formulario />
    </Provider>
  )
}

export default App
