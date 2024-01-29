/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onCreateCompany(filter: $filter, owner: $owner) {
      city
      companyName
      dotNumber
      state
      streetAddress
      users {
        nextToken
        __typename
      }
      zipCode
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onUpdateCompany(filter: $filter, owner: $owner) {
      city
      companyName
      dotNumber
      state
      streetAddress
      users {
        nextToken
        __typename
      }
      zipCode
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onDeleteCompany(filter: $filter, owner: $owner) {
      city
      companyName
      dotNumber
      state
      streetAddress
      users {
        nextToken
        __typename
      }
      zipCode
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      company {
        city
        companyName
        dotNumber
        state
        streetAddress
        zipCode
        createdAt
        updatedAt
        owner
        __typename
      }
      email
      firstName
      lastName
      createdAt
      updatedAt
      companyUsersDotNumber
      owner
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      company {
        city
        companyName
        dotNumber
        state
        streetAddress
        zipCode
        createdAt
        updatedAt
        owner
        __typename
      }
      email
      firstName
      lastName
      createdAt
      updatedAt
      companyUsersDotNumber
      owner
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      company {
        city
        companyName
        dotNumber
        state
        streetAddress
        zipCode
        createdAt
        updatedAt
        owner
        __typename
      }
      email
      firstName
      lastName
      createdAt
      updatedAt
      companyUsersDotNumber
      owner
      __typename
    }
  }
`;
