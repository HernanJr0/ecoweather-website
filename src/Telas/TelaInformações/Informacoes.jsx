// import './Dicas.css'
import AtalhoDicas from '../../Components/AtalhoDicasCont/AtalhoDicas'

const Dicas = () => {

  return (
    <div id='dicasPage'>
      <div id='dicasCont'>
        <AtalhoDicas
          titulo={'Endereços'}
          descricao={'Encontre endereços úteis de empresas/serviços ecologicos'}
          link={''}
          bg={'https://tinyurl.com/3vek7s2t'}
        />
        <AtalhoDicas
          titulo={'Empresas'}
          descricao={'Conheça empresas de confiança e que se preocupam com o planeta'}
          link={''}
          bg={'https://tinyurl.com/339emfs4'}
        />
      </div>
    </div>
  )
}

export default Dicas
