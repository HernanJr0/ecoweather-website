import '../TelaConteudos/Conteudos.css'
import AtalhoDicas from '../../Components/AtalhoDicasCont/AtalhoDicas'
import informacoesData from './informacoesData.json'

const Dicas = () => {

  return (
    <div id='infoContPage'>
      <div id='infoContCont'>
        {informacoesData.map(topico => (
          <AtalhoDicas
            titulo={topico.titulo}
            descricao={topico.descricao}
            link={`/informacoes/${topico.id}`}
            bg={topico.imagem}
          />
        ))}
      </div>
    </div>
  )
}

export default Dicas
