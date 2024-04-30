import { DocumentNode, gql} from '@apollo/client';

export const GET_USERS_QUERY = gql`
  query GetUsers {
    listUsers {
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
