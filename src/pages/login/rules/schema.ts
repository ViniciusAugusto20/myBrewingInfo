import * as Yup from 'yup';

export const loginSchema = Yup.object({
  name: Yup.string()
    .required('Mandatory field')
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{0,}$/,
      'Only alphabetical characters are accepted',
    )
    .matches(
      /^(([a-zA-Z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,}\s)+([a-zA-Z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,}(\s+)?)$)/,
      'Please enter your full name.',
    ),

  legalAge: Yup.bool().oneOf([true], 'Confirm if you have most 18 year old'),
}).defined();
