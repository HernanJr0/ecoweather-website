import { Button } from '@mui/material'
import './Dicas.css'
import AtalhoDicas from '../../Components/AtalhoDicas/AtalhoDicas'
import { Link } from 'react-router-dom'

const Dicas = () => {

  return (
    <div id='dicasPage'>
      <div id='dicasCont'>
        <AtalhoDicas
          titulo={'As dez dicas'}
          descricao={'Veja 10 dicas simples para cuidar do meio ambiente que podem fazer diferença se aplicadas no seu dia a dia'}
          link={'/home/dicas/as-dez-dicas'}
          bg={'https://tinyurl.com/2zcatdzs'}
        />
        <AtalhoDicas
          titulo={'Endereços'}
          descricao={'Encontre endereços úteis de empresas/serviços ecologicos'}
          link={''}
          bg={'https://tinyurl.com/3vek7s2t'}
        />
        <AtalhoDicas
          titulo={'Empresas'}
          descricao={'Encontre endereços úteis de empresas/serviços ecologicos'}
          link={''}
          bg={'https://tinyurl.com/37rtyktr'}
        />
        <AtalhoDicas
          titulo={'Galeria'}
          descricao={'Fotos e imagens para apreciar o meio ambiente'}
          link={''}
          bg={'https://tinyurl.com/346mehna'}
        />
      </div>
    </div>
  )
}

export default Dicas