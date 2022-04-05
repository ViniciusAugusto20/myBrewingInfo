import { Field, FormikProvider, useFormik } from 'formik';
import React from 'react';

import { useHistory } from 'react-router-dom';
import { loginSchema } from './rules/schema';
import { useAuthContext } from '../../context/auth';

import { UserProps } from '../../models/user';
import { useToast } from '../../context/toast';

import BeeImg from '../../assets/img/bee.png';

import * as S from './style';

const Login: React.FC = () => {
  const { setAuth } = useAuthContext();
  const { addToast } = useToast();
  const history = useHistory();

  const formik = useFormik<UserProps>({
    initialValues: {
      name: '',
      legalAge: false,
    },
    validationSchema: loginSchema,
    validateOnChange: true,
    onSubmit: async (values) => {
      setAuth({ name: values.name });
      history.push('/home');
    },
  });

  const handleSubmit = (): void => {
    if (!formik.isValid) {
      addToast({
        type: 'error',
        content: 'Existem erros no formulário',
      });
    } else {
      formik.submitForm();
    }
  };
  return (
    <S.LoginWrapper>
      <FormikProvider value={formik}>
        <S.FormBox onSubmit={formik.handleSubmit}>
          <S.ContainerInput hasError={formik.errors.name}>
            <S.TextInfo>Please, enter your full name below</S.TextInfo>
            <S.TextInfo>Only alphabetical characters are accepted</S.TextInfo>
            <Field
              type="text"
              name="name"
              id="qa-name-input"
              placeholder="Full name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <S.ContainerError>{formik.errors.name}</S.ContainerError>
            )}
          </S.ContainerInput>
          <S.ContainerCheckBox>
            <div>
              <Field type="checkbox" name="legalAge" id="qa-checkbox" />
              <S.TextInfo>Are you older than 18 years old?</S.TextInfo>
              {formik.errors.legalAge && (
                <S.ContainerError>{formik.errors.legalAge}</S.ContainerError>
              )}
            </div>
          </S.ContainerCheckBox>
          <S.ButtonSubmitContainer>
            <button
              disabled={!(formik.isValid && formik.dirty)}
              type="button"
              id="qa-submit-button"
              onClick={() => handleSubmit()}
            >
              Enter
            </button>
          </S.ButtonSubmitContainer>
        </S.FormBox>
      </FormikProvider>
      <S.BeeContainer>
        <img alt="beeImg" src={BeeImg} />
      </S.BeeContainer>
    </S.LoginWrapper>
  );
};

export default Login;
