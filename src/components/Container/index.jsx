import './container.css'
import Input from '../Input'
import Button from '../Button'

const Container = () => {
    return (
        <div className='container'>
                <h1>Login</h1>
            <div>
                <Input type="email" placeholder="example@gmail.com"/>
                <Input type="password" placeholder="Password"/>
            </div>
            <Button />
        </div>
    )
}

export default Container;