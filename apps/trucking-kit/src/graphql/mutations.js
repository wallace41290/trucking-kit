/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
