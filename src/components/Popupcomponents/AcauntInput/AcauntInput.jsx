import style from './AcauntInput.module.css';

export default function AcauntInput({ icon, texPlesholder }) {
  return (
    <div className={style.input_label}>
      <img src={icon} alt='user' />
      <input type='text' className={style.input} placeholder={texPlesholder} />
    </div>
  );
}
