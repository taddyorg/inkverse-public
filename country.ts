import { Country, Language } from '../shared/graphql/types.js';

export const rawAllCountries: Country[] = Object.values(Country);

const allCountriesSorted: Country[] = rawAllCountries.sort()

const allCountriesSet = new Set(allCountriesSorted)

const primaryCountries: Country[] = [
  Country.UnitedStatesOfAmerica,
  Country.UnitedKingdom,
  Country.Canada,
  Country.Australia,
  Country.Germany,
  Country.Spain,
  Country.France,
  Country.KoreaSouth,
  Country.Japan,
  Country.China,
  Country.Brazil,
  Country.India,
  Country.Nigeria,
]

const primaryCountriesSet: Set<Country> = new Set(primaryCountries)

export const allCountries: Country[] = [...primaryCountries, ...allCountriesSorted.filter(country => !primaryCountriesSet.has(country))]

export function safeCountry(country: Country | null): Country | null {
  if (!country) return null;
  else if (!allCountriesSet.has(country)) return null;
  return country;
}

export function getPrettyCountry(country: Country): string {
  switch(country){
    case Country.UnitedStatesOfAmerica:
      return "USA"
    case Country.UnitedKingdom:
      return "UK"
    case Country.KoreaSouth:
      return "South Korea"
    case Country.KoreaNorth:
      return "North Korea"
    case Country.MoldovaTheRepublic:
      return "Moldova"
    case Country.VirginIslandsUs:
      return "Virgin Islands (US)"
    case Country.VirginIslandsBritish:
      return "Virgin Islands (British)"
    case Country.MinorOutlyingIslandsUs:
      return "Minor Outlying Islands (US)"
    case Country.Curacao:
      return "Curaçao"
    case Country.SaintHelenaAscensionAndTristanDaCunha:
      return "Saint Helena, Ascension and Tristan da Cunha"
    default:
      return country.split("_").map(word => { return word[0]?.toUpperCase() + word.slice(1)?.toLowerCase()} ).join(" ")
  }
}