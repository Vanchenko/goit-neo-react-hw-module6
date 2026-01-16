import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});

const initialValues = {
  name: "",
  number: ""
};

const ContactForm = ({updateContacts}) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    values = {id: nanoid(5), ...values}
    updateContacts(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
      <Form className={css.form}>
        <div>
            <label htmlFor={nameFieldId}>Name</label>
            <ErrorMessage className={`${css.error_message} ${css.flicker_1}`} name="name" component="span" />
        </div>
        <Field type="text" name="name" id={nameFieldId} />
        <div>
            <label htmlFor={numberFieldId}>Number</label>
            <ErrorMessage className={`${css.error_message} ${css.flicker_1}`} name="number" component="span" />
        </div>
        <Field type="phone" name="number" id={numberFieldId} />
        
        <button className={css.form_button}type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;