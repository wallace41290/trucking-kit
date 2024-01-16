/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompany = /* GraphQL */ `
  query GetCompany($dotNumber: String!) {
    getCompany(dotNumber: $dotNumber) {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $dotNumber: String
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompanies(
      dotNumber: $dotNumber
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        firstName
        lastName
        createdAt
        updatedAt
        companyUsersDotNumber
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
