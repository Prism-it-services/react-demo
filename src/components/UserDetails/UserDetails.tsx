import { useQuery } from '@apollo/client';
import { GET_USERS_QUERY } from '../../graphqlApolloClient/queries/getUsers';
import { Table, Th, Td, PageTitle } from './styles'

type User = {
    id: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    addressLine1: string,
    addressLine2?: string,
    city: string,
    country: string,
    postcode: string,
    phoneNumber: string,
}

type UserData = {
    listUsers: User[];
};

const UserDetails = () => {


  const { loading, error, data } = useQuery<UserData>(GET_USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <PageTitle>User Details</PageTitle>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>dateOfBirTh</Th>
            <Th>addressLine1</Th>
            <Th>addressLine2</Th>
            <Th>city</Th>
            <Th>country</Th>
            <Th>postcode</Th>
            <Th>phoneNumber</Th>
          </tr>
        </thead>
        <tbody>
          {data && data.listUsers.map(user => (
            <tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{user.dateOfBirth}</Td>
              <Td>{user.addressLine1}</Td>
              <Td>{user.addressLine2}</Td>
              <Td>{user.city}</Td>
              <Td>{user.country}</Td>
              <Td>{user.postcode}</Td>
              <Td>{user.phoneNumber}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserDetails;
