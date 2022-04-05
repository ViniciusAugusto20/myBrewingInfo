import { BASE_URL } from '../../config/env';

import { getData } from '../defaultServices';

import { BrewingProps, FilterProps } from '../../models/brewing';

export const getBreweries = async (
  filter: FilterProps,
): Promise<BrewingProps[]> => {
  const response = await getData(`${BASE_URL}?per_page=6`, filter);
  return response;
};
