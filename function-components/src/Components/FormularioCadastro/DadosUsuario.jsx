import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

export default function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } })

  const validacoes = useContext(ValidacoesCadastro)

  function validarCampos(event) {
    const { name, value } = event.target
    const novoEstado = { ...erros }
    novoEstado[name] = validacoes[name](value)
    setErros(novoEstado)
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false
      }
    }
    return true
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (possoEnviar()) {
          aoEnviar({ email, senha })
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => { setEmail(event.target.value) }}
        id='email'
        label='email'
        name="email"
        type='email'
        required
        variant="outlined"
        fullWidth
        margin="normal" />
      <TextField
        value={senha}
        onChange={(event) => { setSenha(event.target.value) }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id='senha'
        label='senha'
        name="senha"
        type='password'
        required
        variant="outlined"
        fullWidth
        margin="normal" />
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  )
}