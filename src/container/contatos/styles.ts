import { styled } from 'styled-components'

export const Main = styled.div`
  width: 100vw;
  height: 10vh;
  background: #808e9b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`

export const Titulo = styled.p`
  margin-left: 24px;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  font-size: 24px;
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const Center = styled.ul`
  height: 100vh;
  margin-top: 56px;
  margin-left: 650px;
  display: block;
  height: auto;
  position: absolute;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 16px;

  label {
    display: block;
    align-items: center;
    margin-bottom: 16px;
    background-color: #fcfcfc;
    color: #000;
  }
`
export const Form = styled.form`
  max-width: 100%;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`

export const BotaoSalvar = styled.button`
  display: inline-block;
  padding: 8px 16px;
  margin: 8px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #192a56;
  }
`

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: block;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
`

export const Campo = styled.input`
  padding: 8px;
  margin: 2px;
  font-weight: bold;
  border-color: #666666;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: block;
`

export const Botao = styled.button`
  display: inline-block;
  padding: 8px 32px;
  margin: 8px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #192a56;
  }
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  display: flex;
  gap: 8px;
`

export const BotaoCancelarRemover = styled(Botao)`
  display: inline-block;
  padding: 8px 16px;
  margin: 8px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #fc5c65;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eb3b5a;
  }
`

export const Aside = styled.aside`
  width: 100%;
  display: block;
  background-color: #fcfcfc;
  border-radius: 8px;
`
export const List = styled.div`
  display: inline-block;
  margin: 8px;
`
