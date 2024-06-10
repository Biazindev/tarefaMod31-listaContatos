import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Aside, BotaoSalvar, CampoForm, Efeito, Form } from './styles'
import axios from 'axios'
import { cadastrar } from '../../store/reducers/tarefas'
import { useGetContatosQuery } from '../../services/api'

const Formulario = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const { data: contatos, error, isLoading } = useGetContatosQuery();

  const cadastrarTarefa = async (evento: FormEvent) => {
    evento.preventDefault();

    const telefoneNumero = parseInt(telefone, 10);

    if (isNaN(telefoneNumero)) {
      alert('Por favor, insira um número de telefone válido');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/clientes', {
        nome,
        email,
        telefone: telefoneNumero,
      });

      const { data } = response;
      dispatch(
        cadastrar({
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          finalizado: false,
        })
      );
      setNome('');
      setEmail('');
      setTelefone('');
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
    }
  };

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
      <div>
        <h2>Lista de Contatos</h2>
        {isLoading && <p>Carregando...</p>}
        {error && <p>Erro ao carregar contatos</p>}
        {contatos && (
          <ul>
            {contatos.map((contato, index) => (
            <li key={index}>{contato.nome} - {contato.email} - {contato.telefone}</li>
        ))}
          </ul>
        )}
      </div>
    </Efeito>
  );
};

export default Formulario;
