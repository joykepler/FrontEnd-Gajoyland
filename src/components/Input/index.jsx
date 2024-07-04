import './input.css'

const Input = ({type, placeholder, svg}) => {
    return (
        <div className='input'>
            <input className='input-box' type={type} placeholder={placeholder}/>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D9D9D9" className="size-6">
            <path fillRule="evenodd" d={svg} clipRule="evenodd" />
            </svg>
        </div>
    )
}

export default Input;