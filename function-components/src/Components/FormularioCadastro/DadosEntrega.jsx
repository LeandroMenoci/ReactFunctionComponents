import { Button, TextField } from "@material-ui/core";

export default function DadosEntrega() {
  return (
    <form>
      <TextField
        id='cep'
        label='CEP'
        type='number'
        variant="outlined"
        margin="normal"
      />
      <TextField
        id='endereco'
        label='Endereço'
        type='text'
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id='numero'
        label='Numero'
        type='number'
        variant="outlined"
        margin="normal"
      />
      <TextField
        id='estado'
        label='Estado'
        type='text'
        variant="outlined"
        margin="normal"
      />
      <TextField
        id='cidade'
        label='Cidade'
        type='text'
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Finalizar Cadastro
      </Button>
    </form>
  )
}