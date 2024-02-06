import { gql } from './__generated__';

export const ON_TEAM_OWN_ADDED = gql(`
subscription OnTeamOwnAdded {
  onTeamAdded{
    ...TeamOwn
  }
}
`);

export const ON_FOOTBALLER_NAV_ADDED = gql(`
subscription OnFootballerNavAdded {
  onFootballerAdded {
    ...FootballerNav
  }
}
`);

export const ON_FOOTBALLER_NAV_UPDATED = gql(`
subscription OnFootballerNavUpdated {
  onFootballerUpdated {
    ...FootballerNav
  }
}
`);