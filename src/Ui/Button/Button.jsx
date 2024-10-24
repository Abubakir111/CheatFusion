import style from './Button.module.css';

function Button(props) {
  return (
    <button
      onClick={props.Clikc}
      type='button'
      className={`${style.button_template} button_reset ${props.buttonHeader}`}
      style={{ background: props.bg }}
    >
      {props.user ? <img src={props.user} alt='button  icon' /> : ''}
      <span style={{ fontWeight: props.fw }}>{props.text}</span>
    </button>
  );
}
export default Button;
