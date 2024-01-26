import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <input
        type="text"
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </div>
  );
};
