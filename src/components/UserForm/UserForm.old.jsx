import { useId } from 'react';
import css from './UserForm.module.css';

export const UserForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const accessFieldId = useId();

  const handleSubmit = evt => {
    evt.preventDefault();
    onAdd({
      id: Date.now(),
      username: evt.target.elements.name.value,
      access: evt.target.elements.access.value,
    });
    evt.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formGroup}>
        <label htmlFor={nameFieldId}>Username:</label>
        <input type="text" name="name" id={nameFieldId} />
      </div>

      <div className={css.formGroup}>
        <label htmlFor={accessFieldId}>Access:</label>
        <select name="access" htmlFor={accessFieldId}>
          <option value="r">Read</option>
          <option value="w">Write</option>
          <option value="m">Maintain</option>
        </select>
      </div>

      <button type="submit">Add user</button>
    </form>
  );
};
