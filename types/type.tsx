
export interface City {
  city: string;
  lat: string;
  lng: string;
  country: string;
  iso2: string;
  admin_name: string;
  capital: string;
  population: string;
  population_proper: string;
}

export enum Capital {
  Admin = "admin",
  Empty = "",
  Primary = "primary",
}

export enum Country {
  Kenya = "Kenya",
}

export enum Iso2 {
  Ke = "KE",
}