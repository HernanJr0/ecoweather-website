import { Button } from '@mui/material'
import './Dicas.css'
import { Link } from 'react-router-dom'
import { Label } from '@mui/icons-material'

const Dicas = () => {
  return (
    <div id='dicasPage'>
      <div id='dicasCont'>
        <Link to={'/home/dicas/as-dez-dicas'}>
          <Button variant='outlined'>Acessar</Button>
        </Link>
      </div>
    </div>
  )
}

export default Dicas