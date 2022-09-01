import './Button.css'

const Button = (props) => {
  const {onClick, children} = props;

  return (
    <button 
      onClick={onClick}
      className={`button`}
    >
      {children}
    </button>
  )
}

export default Button;