import { DocumentNode, gql} from '@apollo/client';

export const GET_LOCATIONS: DocumentNode = gql`
query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;