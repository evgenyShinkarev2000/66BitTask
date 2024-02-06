import { gql } from "./__generated__";

export const TEAM_OWN = gql(`
fragment TeamOwn on Team{
  id
  name
}
`);

export const COUNTRY_OWN = gql(`
fragment CountryOwn on Country{
  id
  name
}
`);

export const FOOTBALLER_OWN = gql(`
fragment FootballerOwn on Footballer{
  id
  name
  surname
  gender
  bithday
}
`);

export const FOOTBALLER_NAV = gql(`
fragment FootballerNav on Footballer{
  team{
    ...TeamOwn
  }
  country{
    ...CountryOwn
  }
  ...FootballerOwn
}
`);


