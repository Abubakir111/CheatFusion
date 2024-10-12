import style from './AcauntInput.module.css';

export default function AcauntInput({
  inputType,
  value,
  eyeClick,
  eyeState,
  eyeIcon,
  icon,
  texPlesholder,
  Change,
  name,
  massage
}) {
  return (
    <div className={style.input__container}>
      {/* {eyeState && <img onClick={eyeClick} className={style.eye} src={eyeIcon} alt='eyeOpen' />} */}

      <div className={style.input_label}>
        <img src={icon} alt='user' />
        <input
          type={inputType}
          className={style.input}
          value={value}
          placeholder={texPlesholder}
          onChange={Change}
          name={name}
        />
        {eyeState && <img onClick={eyeClick} className={style.eye} src={eyeIcon} alt='eyeOpen' />}
      </div>
      <span>{massage}</span>
    </div>
  );
}
