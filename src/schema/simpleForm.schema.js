import * as Yup from 'yup';

const simpleSchema = Yup.object()
  .shape({
    city: Yup.string()
      .min(4, 'Minimum 4 characters')
      .max(255, 'Exceeds maximum amount of characters')
      .required('Required'),
    age: Yup.number()
      .min(18, 'Must be 18 years old'),
    notes: Yup.string()
      .max(100, 'Ex. "12345" or "12345-5678"'),
  });

const initialValues = {
  city: '',
  age: 0,
  notes: '',
};

export { initialValues, simpleSchema }
