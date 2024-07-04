import './container.css'
import Input from '../Input'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Container = () => {
    const svgName = {
        cadeado: "M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",
        usuario:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
    }
    return (
        <div className='container'>
                <h1>Login</h1>
            <div>
                <Input type="email" placeholder="example@gmail.com" svg={svgName.usuario}/>
                <Input type="password" placeholder="Password" svg={svgName.cadeado}/>
            </div>
            <p>
        Não tem uma conta? <Link to="/register">Registre-se aqui</Link>
      </p>
            <Button />
        </div>
    )
}

export default Container;