import './container.css'
import Input from '../Input'
import Button from '../Button'

const Container = () => {
    return (
        <div className='container'>
            <h1>Back to your digital life</h1>
            <p>Choose one of the option to go</p>
            <Input type="email" placeholder="example@gmail.com"/>
            <Input type="password" placeholder="Password"/>
            <Button />
        </div>
    )
}

export default Container;