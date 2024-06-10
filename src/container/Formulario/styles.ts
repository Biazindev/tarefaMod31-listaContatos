import styled from 'styled-components'
export const Aside = styled.aside`
  padding: 20px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  display: flex;
  background-color: #fcfcfc;
`

export const CampoForm = styled.input`
  margin-bottom: 10px;
  margin: 8px;
  padding: 10px;
  width: 100%;
  background-color: #fcfcfc;
  box-sizing: border-box;
`

export const BotaoSalvar = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: #0056b3;
  }
`
export const Descricao = styled.textarea`
color: #8B8B8B;
background-color: #FCFCFC;
font-size 14px;
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

export const BotaoCancelarRemover = styled.button`
  background-color: #f1f2f6;
`

export const Efeito = styled.div`
  position: fixed;
  top: 56px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: 150px;
  border-radius: 16px;
  width: 600px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`
