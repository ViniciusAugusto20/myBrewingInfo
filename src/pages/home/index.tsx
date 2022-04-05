import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';

import { useAuthContext } from '../../context/auth';
import { useToast } from '../../context/toast';
import { BrewingProps, FilterProps } from '../../models/brewing';
import { getBreweries } from '../../services/brewery/getBrewery';

import { Brewing } from '../../components';

import * as S from './style';

const Home: React.FC = () => {
  const { addToast } = useToast();
  const { auth, setAuth } = useAuthContext();
  const history = useHistory();

  const [page, setPage] = useState(1);
  const [breweries, setBreweries] = useState<BrewingProps[]>([]);

  const backToLoginScreen = (): void => {
    setAuth(undefined);
    history.push('/');
  };

  const getBreweriesInfos = async (filters: FilterProps): Promise<void> => {
    try {
      const breweriesFounded = await getBreweries(filters);
      setBreweries(breweriesFounded);
    } catch (err) {
      addToast({
        type: 'error',
        content: 'Error on connect to server.',
      });
    }
  };

  const removeBrewing = (brewingId: string): void => {
    if (breweries.length >= 2) {
      const newListBreweries = breweries.filter(
        (value) => value.id !== brewingId,
      );
      setBreweries(newListBreweries);
    } else {
      addToast({
        type: 'error',
        content: 'Not is possiblite remove all breweries.',
      });
    }
  };

  const handleChangePage = (event, value): void => {
    setPage(value);
  };

  useEffect(() => {
    getBreweriesInfos({ page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <S.MainContent>
      <S.Header>
        <S.ContainerGoBack>
          <S.IconBack onClick={backToLoginScreen} />
          <S.TextInfo>Go back</S.TextInfo>
        </S.ContainerGoBack>
        <S.TextInfo>{auth?.name}</S.TextInfo>
      </S.Header>
      <S.BrewingContainer>
        {breweries.map((brewing) => (
          <Brewing
            id={brewing.id}
            key={brewing.id}
            name={brewing.name}
            street={brewing.street || 'Not found'}
            city={brewing.city || 'Not found'}
            state={brewing.state || 'Not found'}
            country={brewing.country || 'Not found'}
            brewery_type={brewing.brewery_type || 'Not found'}
            phone={brewing.phone || 'Not found'}
            postal_code={brewing.postal_code || 'Not found'}
            removerSelectedBrewing={removeBrewing}
          />
        ))}
      </S.BrewingContainer>
      <S.PaginationContainer>
        <Pagination count={42} page={page} onChange={handleChangePage} />
      </S.PaginationContainer>
    </S.MainContent>
  );
};

export default Home;
