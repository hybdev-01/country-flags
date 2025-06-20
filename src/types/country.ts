import { Region } from "./regions";

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type Country = {
  name: string;
  nativeName: string;
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  region: Region;
  subregion: string;
  population: number;
  capital: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
  borders: string[];
};

type Info = {
  title: string,
  description: string;
}

export type CountryInfo = {
    img: string,
    name: string,
    info: Info[],
}