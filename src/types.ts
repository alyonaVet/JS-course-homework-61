export interface CountryItemType {
  name: string;
  alpha3Code: string;
}

export interface CountryInfoType {
  name: string;
  capital: string;
  population: number;
  borders: Array<string>;
  flag: string;
}

export interface ApiCountry {
  name: string;
  alpha3Code: string;
  independent: boolean;
}

export interface ApiCountryInfo {
  "name": string;
  "topLevelDomain": Array<string>;
  "alpha2Code": string;
  "alpha3Code": string;
  "callingCodes": Array<string>;
  "capital": string;
  "altSpellings": Array<string>;
  "subregion": string;
  "region": string;
  "population": number;
  "latlng": Array<string>;
  "demonym": string;
  "area": number;
  "gini": number;
  "timezones": Array<string>;
  "borders": Array<string>;
  "nativeName": string;
  "numericCode": string;
  "flags": Record<string, string>;
  "currencies": Array<string>;
  "languages": Array<string>;
  "translations": Record<string, string>;
  "flag": string;
  "regionalBlocs": Array<string>;
  "cioc": string;
  "independent": boolean;
}