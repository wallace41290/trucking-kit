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
      driver {
        nextToken
        __typename
      }
      state
      streetAddress
      task {
        nextToken
        __typename
      }
      truck {
        nextToken
        __typename
      }
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
      driver {
        nextToken
        __typename
      }
      state
      streetAddress
      task {
        nextToken
        __typename
      }
      truck {
        nextToken
        __typename
      }
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
      driver {
        nextToken
        __typename
      }
      state
      streetAddress
      task {
        nextToken
        __typename
      }
      truck {
        nextToken
        __typename
      }
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
export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
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
      id
      firstName
      lastName
      email
      cdlNumber
      createdAt
      updatedAt
      companyDriverDotNumber
      owner
      __typename
    }
  }
`;
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
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
      id
      firstName
      lastName
      email
      cdlNumber
      createdAt
      updatedAt
      companyDriverDotNumber
      owner
      __typename
    }
  }
`;
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
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
      id
      firstName
      lastName
      email
      cdlNumber
      createdAt
      updatedAt
      companyDriverDotNumber
      owner
      __typename
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
      id
      title
      description
      status
      createdDate
      dueDate
      lastUpdatedDate
      createdAt
      updatedAt
      companyTaskDotNumber
      owner
      __typename
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
      id
      title
      description
      status
      createdDate
      dueDate
      lastUpdatedDate
      createdAt
      updatedAt
      companyTaskDotNumber
      owner
      __typename
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
      id
      title
      description
      status
      createdDate
      dueDate
      lastUpdatedDate
      createdAt
      updatedAt
      companyTaskDotNumber
      owner
      __typename
    }
  }
`;
export const createTruck = /* GraphQL */ `
  mutation CreateTruck(
    $input: CreateTruckInput!
    $condition: ModelTruckConditionInput
  ) {
    createTruck(input: $input, condition: $condition) {
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
      id
      make
      tag
      unitNumber
      year
      createdAt
      updatedAt
      companyTruckDotNumber
      owner
      __typename
    }
  }
`;
export const updateTruck = /* GraphQL */ `
  mutation UpdateTruck(
    $input: UpdateTruckInput!
    $condition: ModelTruckConditionInput
  ) {
    updateTruck(input: $input, condition: $condition) {
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
      id
      make
      tag
      unitNumber
      year
      createdAt
      updatedAt
      companyTruckDotNumber
      owner
      __typename
    }
  }
`;
export const deleteTruck = /* GraphQL */ `
  mutation DeleteTruck(
    $input: DeleteTruckInput!
    $condition: ModelTruckConditionInput
  ) {
    deleteTruck(input: $input, condition: $condition) {
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
      id
      make
      tag
      unitNumber
      year
      createdAt
      updatedAt
      companyTruckDotNumber
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
