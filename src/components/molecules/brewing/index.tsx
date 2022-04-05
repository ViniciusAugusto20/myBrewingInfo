import React, { useState } from 'react';

import { BrewingProps } from '../../../models/brewing';

import * as S from './style';

const Brewing: React.FC<BrewingProps> = (brewing) => {
  const [customInput, setCustomInput] = useState<string>('');

  return (
    <S.Container>
      <S.IconTrashContainer>
        <S.IconTrash
          id={`qa-remove-button-${brewing.id}`}
          onClick={() => brewing.removerSelectedBrewing(brewing.id)}
        />
      </S.IconTrashContainer>

      <S.TextTitle>{brewing.name}</S.TextTitle>
      <S.TextAddressInfo>{brewing.street}</S.TextAddressInfo>
      <S.TextLocationtInfo>
        {`${brewing.city}, ${brewing.state} - ${brewing.country}`}
      </S.TextLocationtInfo>

      <S.ChipContainer>
        <S.Chip>
          <S.IconBarChart />
          {brewing.brewery_type}
        </S.Chip>
        <S.Chip>
          <S.IconLocation />
          {brewing.postal_code}
        </S.Chip>
        <S.Chip>
          <S.IconPhone />
          {brewing.phone}
        </S.Chip>
        <S.ChipInputContainer>
          <S.IconMore />
          <S.ChipInput
            value={customInput}
            placeholder="add more"
            onChange={(event) => setCustomInput(event?.target.value)}
          />
        </S.ChipInputContainer>
      </S.ChipContainer>
    </S.Container>
  );
};

export default Brewing;
