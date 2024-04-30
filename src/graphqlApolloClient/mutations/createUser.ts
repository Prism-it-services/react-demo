import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      firstName
      lastName
      dateOfBirth
      addressLine1
      addressLine2
      city
      country
      postcode
      phoneNumber
    }
  }
`;
