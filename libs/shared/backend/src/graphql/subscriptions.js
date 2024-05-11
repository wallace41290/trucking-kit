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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onUpdateCompany(filter: $filter, owner: $owner) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onDeleteCompany(filter: $filter, owner: $owner) {
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
export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver(
    $filter: ModelSubscriptionDriverFilterInput
    $owner: String
  ) {
    onCreateDriver(filter: $filter, owner: $owner) {
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
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver(
    $filter: ModelSubscriptionDriverFilterInput
    $owner: String
  ) {
    onUpdateDriver(filter: $filter, owner: $owner) {
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
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver(
    $filter: ModelSubscriptionDriverFilterInput
    $owner: String
  ) {
    onDeleteDriver(filter: $filter, owner: $owner) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onCreateTask(filter: $filter, owner: $owner) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onUpdateTask(filter: $filter, owner: $owner) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onDeleteTask(filter: $filter, owner: $owner) {
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
export const onCreateTruck = /* GraphQL */ `
  subscription OnCreateTruck(
    $filter: ModelSubscriptionTruckFilterInput
    $owner: String
  ) {
    onCreateTruck(filter: $filter, owner: $owner) {
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
export const onUpdateTruck = /* GraphQL */ `
  subscription OnUpdateTruck(
    $filter: ModelSubscriptionTruckFilterInput
    $owner: String
  ) {
    onUpdateTruck(filter: $filter, owner: $owner) {
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
export const onDeleteTruck = /* GraphQL */ `
  subscription OnDeleteTruck(
    $filter: ModelSubscriptionTruckFilterInput
    $owner: String
  ) {
    onDeleteTruck(filter: $filter, owner: $owner) {
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
