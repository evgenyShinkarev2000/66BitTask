import { gql } from "./__generated__";

export const ADD_FOOTBALLER_ID = gql(`
mutation AddFootballerId($addFootballerInput: AddFootballerInput) {
  addFootballer(addFootballerInput: $addFootballerInput)
  {
    id
  }
}
`);

export const UPDATE_FOOTBALLER_ID = gql(`
mutation UpdateFootballerId($updateFootballerInput: UpdateFootballerInput!){
    updateFootballer(updateFootballerInput: $updateFootballerInput){
        id
    }
}
`);

export const ADD_TEAM_ID = gql(`
mutation AddTeamId($addTeamInput: AddTeamInput!){
  addTeam(addTeamInput: $addTeamInput){
    id
  }
}
`)

export const ADD_TEAM_OWN = gql(`
mutation AddTeamOwn($addTeamInput: AddTeamInput!) {
  addTeam(addTeamInput: $addTeamInput) {
    ...TeamOwn
  }
}
`);
