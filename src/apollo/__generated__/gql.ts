/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nfragment TeamOwn on Team{\n  id\n  name\n}\n": types.TeamOwnFragmentDoc,
    "\nfragment CountryOwn on Country{\n  id\n  name\n}\n": types.CountryOwnFragmentDoc,
    "\nfragment FootballerOwn on Footballer{\n  id\n  name\n  surname\n  gender\n  bithday\n}\n": types.FootballerOwnFragmentDoc,
    "\nfragment FootballerNav on Footballer{\n  team{\n    ...TeamOwn\n  }\n  country{\n    ...CountryOwn\n  }\n  ...FootballerOwn\n}\n": types.FootballerNavFragmentDoc,
    "\nmutation AddFootballerId($addFootballerInput: AddFootballerInput) {\n  addFootballer(addFootballerInput: $addFootballerInput)\n  {\n    id\n  }\n}\n": types.AddFootballerIdDocument,
    "\nmutation UpdateFootballerId($updateFootballerInput: UpdateFootballerInput!){\n    updateFootballer(updateFootballerInput: $updateFootballerInput){\n        id\n    }\n}\n": types.UpdateFootballerIdDocument,
    "\nmutation AddTeamId($addTeamInput: AddTeamInput!){\n  addTeam(addTeamInput: $addTeamInput){\n    id\n  }\n}\n": types.AddTeamIdDocument,
    "\nmutation AddTeamOwn($addTeamInput: AddTeamInput!) {\n  addTeam(addTeamInput: $addTeamInput) {\n    ...TeamOwn\n  }\n}\n": types.AddTeamOwnDocument,
    "\nquery GetFootballersNav{\n  footballers{\n    ...FootballerNav\n  }\n}\n": types.GetFootballersNavDocument,
    "\nquery GetTeamsOwn{\n  teams{\n    ...TeamOwn\n  }\n}\n": types.GetTeamsOwnDocument,
    "\nquery GetCountriesOwn{\n  countries{\n    ...CountryOwn\n  }\n}\n": types.GetCountriesOwnDocument,
    "\nquery GetTeamsOwnAndCountriesOwn{\n  teams{\n    ...TeamOwn\n  }\n  countries{\n    ...CountryOwn\n  }\n}\n": types.GetTeamsOwnAndCountriesOwnDocument,
    "\nsubscription OnTeamOwnAdded {\n  onTeamAdded{\n    ...TeamOwn\n  }\n}\n": types.OnTeamOwnAddedDocument,
    "\nsubscription OnFootballerNavAdded {\n  onFootballerAdded {\n    ...FootballerNav\n  }\n}\n": types.OnFootballerNavAddedDocument,
    "\nsubscription OnFootballerNavUpdated {\n  onFootballerUpdated {\n    ...FootballerNav\n  }\n}\n": types.OnFootballerNavUpdatedDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment TeamOwn on Team{\n  id\n  name\n}\n"): (typeof documents)["\nfragment TeamOwn on Team{\n  id\n  name\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment CountryOwn on Country{\n  id\n  name\n}\n"): (typeof documents)["\nfragment CountryOwn on Country{\n  id\n  name\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment FootballerOwn on Footballer{\n  id\n  name\n  surname\n  gender\n  bithday\n}\n"): (typeof documents)["\nfragment FootballerOwn on Footballer{\n  id\n  name\n  surname\n  gender\n  bithday\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment FootballerNav on Footballer{\n  team{\n    ...TeamOwn\n  }\n  country{\n    ...CountryOwn\n  }\n  ...FootballerOwn\n}\n"): (typeof documents)["\nfragment FootballerNav on Footballer{\n  team{\n    ...TeamOwn\n  }\n  country{\n    ...CountryOwn\n  }\n  ...FootballerOwn\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AddFootballerId($addFootballerInput: AddFootballerInput) {\n  addFootballer(addFootballerInput: $addFootballerInput)\n  {\n    id\n  }\n}\n"): (typeof documents)["\nmutation AddFootballerId($addFootballerInput: AddFootballerInput) {\n  addFootballer(addFootballerInput: $addFootballerInput)\n  {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateFootballerId($updateFootballerInput: UpdateFootballerInput!){\n    updateFootballer(updateFootballerInput: $updateFootballerInput){\n        id\n    }\n}\n"): (typeof documents)["\nmutation UpdateFootballerId($updateFootballerInput: UpdateFootballerInput!){\n    updateFootballer(updateFootballerInput: $updateFootballerInput){\n        id\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AddTeamId($addTeamInput: AddTeamInput!){\n  addTeam(addTeamInput: $addTeamInput){\n    id\n  }\n}\n"): (typeof documents)["\nmutation AddTeamId($addTeamInput: AddTeamInput!){\n  addTeam(addTeamInput: $addTeamInput){\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AddTeamOwn($addTeamInput: AddTeamInput!) {\n  addTeam(addTeamInput: $addTeamInput) {\n    ...TeamOwn\n  }\n}\n"): (typeof documents)["\nmutation AddTeamOwn($addTeamInput: AddTeamInput!) {\n  addTeam(addTeamInput: $addTeamInput) {\n    ...TeamOwn\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetFootballersNav{\n  footballers{\n    ...FootballerNav\n  }\n}\n"): (typeof documents)["\nquery GetFootballersNav{\n  footballers{\n    ...FootballerNav\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetTeamsOwn{\n  teams{\n    ...TeamOwn\n  }\n}\n"): (typeof documents)["\nquery GetTeamsOwn{\n  teams{\n    ...TeamOwn\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetCountriesOwn{\n  countries{\n    ...CountryOwn\n  }\n}\n"): (typeof documents)["\nquery GetCountriesOwn{\n  countries{\n    ...CountryOwn\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetTeamsOwnAndCountriesOwn{\n  teams{\n    ...TeamOwn\n  }\n  countries{\n    ...CountryOwn\n  }\n}\n"): (typeof documents)["\nquery GetTeamsOwnAndCountriesOwn{\n  teams{\n    ...TeamOwn\n  }\n  countries{\n    ...CountryOwn\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nsubscription OnTeamOwnAdded {\n  onTeamAdded{\n    ...TeamOwn\n  }\n}\n"): (typeof documents)["\nsubscription OnTeamOwnAdded {\n  onTeamAdded{\n    ...TeamOwn\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nsubscription OnFootballerNavAdded {\n  onFootballerAdded {\n    ...FootballerNav\n  }\n}\n"): (typeof documents)["\nsubscription OnFootballerNavAdded {\n  onFootballerAdded {\n    ...FootballerNav\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nsubscription OnFootballerNavUpdated {\n  onFootballerUpdated {\n    ...FootballerNav\n  }\n}\n"): (typeof documents)["\nsubscription OnFootballerNavUpdated {\n  onFootballerUpdated {\n    ...FootballerNav\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;