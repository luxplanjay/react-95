import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './UserForm.module.css';

const userSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Name must be at least 3 symb long')
    .required('This is a required field'),
  access: Yup.string()
    .oneOf(['w', 'r', 'm'], 'Acces must be w r or m')
    .required('This is a required field'),
});

export const UserForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const accessFieldId = useId();

  return (
    <Formik
      initialValues={{
        username: '',
        access: 'r',
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        onAdd({ id: Date.now(), ...values });
        actions.resetForm();
      }}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.formGroup}>
          <label htmlFor={nameFieldId}>Username:</label>
          <Field type="text" name="username" id={nameFieldId} />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={accessFieldId}>Access:</label>
          <Field as="select" name="access" id={accessFieldId}>
            <option value="r">Read</option>
            <option value="w">Write</option>
            <option value="m">Maintain</option>
          </Field>
          <ErrorMessage className={css.error} name="access" component="span" />
        </div>

        <button type="submit">Add user</button>
      </Form>
    </Formik>
  );
};
