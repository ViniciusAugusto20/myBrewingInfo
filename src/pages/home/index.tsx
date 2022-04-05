import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../context/auth';

import * as S from './style';

const Home: React.FC = () => {
  const { auth, setAuth } = useAuthContext();
  const history = useHistory();

  const backToLoginScreen = (): void => {
    setAuth(undefined);
    history.push('/');
  };
  return (
    <S.MainContent>
      <S.Header>
        <S.ContainerGoBack>
          <S.IconBack onClick={backToLoginScreen} />
          <S.TextInfo>Go back</S.TextInfo>
        </S.ContainerGoBack>
        <S.TextInfo>{auth?.name}</S.TextInfo>
        {/* <S.TextInfo>Vinicius Augusto</S.TextInfo> */}
      </S.Header>
    </S.MainContent>
  );
};

export default Home;
