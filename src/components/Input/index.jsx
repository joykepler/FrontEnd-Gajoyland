import './input.css'

const Input = ({type, placeholder}) => {
    return (
        <div className='input'>
            <input className='input-box' type={type} placeholder={placeholder}/>
        </div>
    )
}

export default Input;