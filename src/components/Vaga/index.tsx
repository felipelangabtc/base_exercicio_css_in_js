import { Vagas, VagaTitulo, VagaLink } from './styles'

type Props = {
  titulo: string
  localizacao: string
  senioridade: string
  tipo: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vagas>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.senioridade}</li>
      <li>Tipo de contratacao: {props.tipo}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="">Ver detalhes e candidatar-se</VagaLink>
  </Vagas>
)

export default Vaga
