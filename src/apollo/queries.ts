import { gql } from "./__generated__";

export const GET_FOOTBALLERS_NAV = gql(`
query GetFootballersNav{
  footballers{
    ...FootballerNav
  }
}
`);

export const GET_TEAMS_OWN = gql(`
query GetTeamsOwn{
  teams{
    ...TeamOwn
  }
}
`);

export const GET_COUNTRIES_OWN = gql(`
query GetCountriesOwn{
  countries{
    ...CountryOwn
  }
}
`);

export const GET_TEAMS_OWN_AND_COUNTRIES_OWN = gql(`
query GetTeamsOwnAndCountriesOwn{
  teams{
    ...TeamOwn
  }
  countries{
    ...CountryOwn
  }
}
`);

