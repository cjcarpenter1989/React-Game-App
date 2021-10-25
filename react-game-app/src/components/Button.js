
const Button = ({text, onClick, btnClass}) => {
    return <button onClick={onClick} className={btnClass}>{text}</button>
}

Button.defaultProps = {
    text: "Default Text",
    btnClass: 'btn'
}

export default Button
