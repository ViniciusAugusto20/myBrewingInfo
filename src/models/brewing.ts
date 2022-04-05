export type BrewingProps = {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  brewery_type: string;
  phone: string;
  postal_code: string;
  removerSelectedBrewing: (brewingId: string) => void;
};

export type FilterProps = {
  page: number;
};
