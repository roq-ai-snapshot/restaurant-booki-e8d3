import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip_code: yup.string().required(),
  user_id: yup.string().nullable(),
});
