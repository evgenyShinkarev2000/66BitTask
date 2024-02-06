/* eslint-disable */
//@ts-nocheck
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Date` scalar represents an ISO-8601 compliant date type. */
  Date: { input: any; output: any; }
};

export type AddFootballerInput = {
  bithday: Scalars['Date']['input'];
  country?: InputMaybe<IdInput>;
  gender: Gender;
  name?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<IdInput>;
};

export type AddTeamInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Footballer = {
  __typename?: 'Footballer';
  bithday: Scalars['Date']['output'];
  country?: Maybe<Country>;
  gender: Gender;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  team?: Maybe<Team>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type IdInput = {
  id: Scalars['Int']['input'];
};

export type Mutations = {
  __typename?: 'Mutations';
  addFootballer?: Maybe<Footballer>;
  addTeam?: Maybe<Team>;
  updateFootballer?: Maybe<Footballer>;
};


export type MutationsAddFootballerArgs = {
  addFootballerInput?: InputMaybe<AddFootballerInput>;
};


export type MutationsAddTeamArgs = {
  addTeamInput?: InputMaybe<AddTeamInput>;
};


export type MutationsUpdateFootballerArgs = {
  updateFootballerInput?: InputMaybe<UpdateFootballerInput>;
};

export type Queries = {
  __typename?: 'Queries';
  countries?: Maybe<Array<Maybe<Country>>>;
  footballers?: Maybe<Array<Maybe<Footballer>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
};

export type Subscriptions = {
  __typename?: 'Subscriptions';
  onFootballerAdded?: Maybe<Footballer>;
  onFootballerUpdated?: Maybe<Footballer>;
  onTeamAdded?: Maybe<Team>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UpdateFootballerInput = {
  bithday: Scalars['Date']['input'];
  country?: InputMaybe<IdInput>;
  gender: Gender;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<IdInput>;
};

export type TeamOwnFragment = { __typename?: 'Team', id: number, name?: string | null };

export type CountryOwnFragment = { __typename?: 'Country', id: number, name?: string | null };

export type FootballerOwnFragment = { __typename?: 'Footballer', id: number, name?: string | null, surname?: string | null, gender: Gender, bithday: any };

export type FootballerNavFragment = { __typename?: 'Footballer', id: number, name?: string | null, surname?: string | null, gender: Gender, bithday: any, team?: { __typename?: 'Team', id: number, name?: string | null } | null, country?: { __typename?: 'Country', id: number, name?: string | null } | null };

export type AddFootballerIdMutationVariables = Exact<{
  addFootballerInput?: InputMaybe<AddFootballerInput>;
}>;


export type AddFootballerIdMutation = { __typename?: 'Mutations', addFootballer?: { __typename?: 'Footballer', id: number } | null };

export type UpdateFootballerIdMutationVariables = Exact<{
  updateFootballerInput: UpdateFootballerInput;
}>;


export type UpdateFootballerIdMutation = { __typename?: 'Mutations', updateFootballer?: { __typename?: 'Footballer', id: number } | null };

export type AddTeamIdMutationVariables = Exact<{
  addTeamInput: AddTeamInput;
}>;


export type AddTeamIdMutation = { __typename?: 'Mutations', addTeam?: { __typename?: 'Team', id: number } | null };

export type AddTeamOwnMutationVariables = Exact<{
  addTeamInput: AddTeamInput;
}>;


export type AddTeamOwnMutation = { __typename?: 'Mutations', addTeam?: { __typename?: 'Team', id: number, name?: string | null } | null };

export type GetFootballersNavQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFootballersNavQuery = { __typename?: 'Queries', footballers?: Array<{ __typename?: 'Footballer', id: number, name?: string | null, surname?: string | null, gender: Gender, bithday: any, team?: { __typename?: 'Team', id: number, name?: string | null } | null, country?: { __typename?: 'Country', id: number, name?: string | null } | null } | null> | null };

export type GetTeamsOwnQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeamsOwnQuery = { __typename?: 'Queries', teams?: Array<{ __typename?: 'Team', id: number, name?: string | null } | null> | null };

export type GetCountriesOwnQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesOwnQuery = { __typename?: 'Queries', countries?: Array<{ __typename?: 'Country', id: number, name?: string | null } | null> | null };

export type GetTeamsOwnAndCountriesOwnQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeamsOwnAndCountriesOwnQuery = { __typename?: 'Queries', teams?: Array<{ __typename?: 'Team', id: number, name?: string | null } | null> | null, countries?: Array<{ __typename?: 'Country', id: number, name?: string | null } | null> | null };

export type OnTeamOwnAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnTeamOwnAddedSubscription = { __typename?: 'Subscriptions', onTeamAdded?: { __typename?: 'Team', id: number, name?: string | null } | null };

export type OnFootballerNavAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnFootballerNavAddedSubscription = { __typename?: 'Subscriptions', onFootballerAdded?: { __typename?: 'Footballer', id: number, name?: string | null, surname?: string | null, gender: Gender, bithday: any, team?: { __typename?: 'Team', id: number, name?: string | null } | null, country?: { __typename?: 'Country', id: number, name?: string | null } | null } | null };

export type OnFootballerNavUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnFootballerNavUpdatedSubscription = { __typename?: 'Subscriptions', onFootballerUpdated?: { __typename?: 'Footballer', id: number, name?: string | null, surname?: string | null, gender: Gender, bithday: any, team?: { __typename?: 'Team', id: number, name?: string | null } | null, country?: { __typename?: 'Country', id: number, name?: string | null } | null } | null };

export const TeamOwnFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<TeamOwnFragment, unknown>;
export const CountryOwnFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<CountryOwnFragment, unknown>;
export const FootballerOwnFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FootballerOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Footballer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"bithday"}}]}}]} as unknown as DocumentNode<FootballerOwnFragment, unknown>;
export const FootballerNavFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FootballerNav"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Footballer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamOwn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryOwn"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FootballerOwn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FootballerOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Footballer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"bithday"}}]}}]} as unknown as DocumentNode<FootballerNavFragment, unknown>;
export const AddFootballerIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddFootballerId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addFootballerInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AddFootballerInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addFootballer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addFootballerInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addFootballerInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddFootballerIdMutation, AddFootballerIdMutationVariables>;
export const UpdateFootballerIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFootballerId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateFootballerInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFootballerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFootballer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateFootballerInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateFootballerInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateFootballerIdMutation, UpdateFootballerIdMutationVariables>;
export const AddTeamIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTeamId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addTeamInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddTeamInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addTeamInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addTeamInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddTeamIdMutation, AddTeamIdMutationVariables>;
export const AddTeamOwnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTeamOwn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addTeamInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddTeamInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addTeamInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addTeamInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<AddTeamOwnMutation, AddTeamOwnMutationVariables>;
export const GetFootballersNavDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFootballersNav"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footballers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FootballerNav"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FootballerOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Footballer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"bithday"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FootballerNav"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Footballer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamOwn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryOwn"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FootballerOwn"}}]}}]} as unknown as DocumentNode<GetFootballersNavQuery, GetFootballersNavQueryVariables>;
export const GetTeamsOwnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamsOwn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GetTeamsOwnQuery, GetTeamsOwnQueryVariables>;
export const GetCountriesOwnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountriesOwn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GetCountriesOwnQuery, GetCountriesOwnQueryVariables>;
export const GetTeamsOwnAndCountriesOwnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamsOwnAndCountriesOwn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamOwn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GetTeamsOwnAndCountriesOwnQuery, GetTeamsOwnAndCountriesOwnQueryVariables>;
export const OnTeamOwnAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnTeamOwnAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onTeamAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamOwn"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<OnTeamOwnAddedSubscription, OnTeamOwnAddedSubscriptionVariables>;
export const OnFootballerNavAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnFootballerNavAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onFootballerAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FootballerNav"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FootballerOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Footballer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"bithday"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FootballerNav"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Footballer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamOwn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryOwn"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FootballerOwn"}}]}}]} as unknown as DocumentNode<OnFootballerNavAddedSubscription, OnFootballerNavAddedSubscriptionVariables>;
export const OnFootballerNavUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnFootballerNavUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onFootballerUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FootballerNav"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FootballerOwn"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Footballer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"bithday"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FootballerNav"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Footballer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamOwn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryOwn"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FootballerOwn"}}]}}]} as unknown as DocumentNode<OnFootballerNavUpdatedSubscription, OnFootballerNavUpdatedSubscriptionVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Date` scalar represents an ISO-8601 compliant date type. */
  Date: { input: any; output: any; }
};

export type AddFootballerInput = {
  bithday: Scalars['Date']['input'];
  country?: InputMaybe<IdInput>;
  gender: Gender;
  name?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<IdInput>;
};

export type AddTeamInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Footballer = {
  __typename?: 'Footballer';
  bithday: Scalars['Date']['output'];
  country?: Maybe<Country>;
  gender: Gender;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  team?: Maybe<Team>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type IdInput = {
  id: Scalars['Int']['input'];
};

export type Mutations = {
  __typename?: 'Mutations';
  addFootballer?: Maybe<Footballer>;
  addTeam?: Maybe<Team>;
  updateFootballer?: Maybe<Footballer>;
};


export type MutationsAddFootballerArgs = {
  addFootballerInput?: InputMaybe<AddFootballerInput>;
};


export type MutationsAddTeamArgs = {
  addTeamInput?: InputMaybe<AddTeamInput>;
};


export type MutationsUpdateFootballerArgs = {
  updateFootballerInput?: InputMaybe<UpdateFootballerInput>;
};

export type Queries = {
  __typename?: 'Queries';
  countries?: Maybe<Array<Maybe<Country>>>;
  footballers?: Maybe<Array<Maybe<Footballer>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
};

export type Subscriptions = {
  __typename?: 'Subscriptions';
  onFootballerAdded?: Maybe<Footballer>;
  onFootballerUpdated?: Maybe<Footballer>;
  onTeamAdded?: Maybe<Team>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UpdateFootballerInput = {
  bithday: Scalars['Date']['input'];
  country?: InputMaybe<IdInput>;
  gender: Gender;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<IdInput>;
};
