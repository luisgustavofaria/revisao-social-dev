import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {
  const handleLabelClick = () => {
    console.log('HANDLE LABEL CLICK')
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('HANDLE SUBMIT FORM')
  }

  let email = ''
  const handleChangeInput = (event) => {
    email = event.target.value
  }

  return (
    <>
      <Title onClick={handleLabelClick}>Formulário de login</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form onSubmit={handleSubmitForm}>
        <Input type="text" placeholder="Digite seu e-mail" onChange={handleChangeInput} />
        <p>O e-mail digitado foi: {email}</p>
        <Button type="submit">Botão dentro do form</Button>
      </form>
      <Button onClick={handleLabelClick}>Botão FORA do form</Button>
      <label>LABEL TESTE</label>
      <button>Button</button>
    </>
  )
}
