import { Button, TextField } from "@material-ui/core";
import React from "react";

export default function DadosUsuario({ aoEnviar }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        aoEnviar()
      }}
    >
      <TextField
        id='email'
        label='email'
        type='email'
        required
        variant="outlined"
        fullWidth
        margin="normal" />
      <TextField
        id='senha'
        label='senha'
        type='password'
        required
        variant="outlined"
        fullWidth
        margin="normal" />
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  )
}