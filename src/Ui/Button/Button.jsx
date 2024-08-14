import style from './Button.module.css'

function Button(props) {
  return (
    <button
      type="button"
      className={`${style.button_template} button_reset`}
      style={{ background: props.bg }}
    >
      {props.user ? <img src={props.user} alt="button  icon" /> : ''}
      <span>{props.text}</span>
    </button>
  )
}
export default Button
