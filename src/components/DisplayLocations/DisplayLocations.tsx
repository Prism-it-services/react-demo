import React from 'react';
import { GET_LOCATIONS} from '../../graphqlApolloClient/queries/locations';
import { useQuery } from '@apollo/client';

type Location = {
    id: string;
    name: string;
    description: string;
    photo: string;

}

type LocationData = {
    locations: Location[];
}

type LocationDataError = {
    message: string;
}

export const DisplayLocations = () => {
 const { loading, error, data } = useQuery<LocationData, LocationDataError>(GET_LOCATIONS);

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error : {error.message}</p>;

 return (
 <div>
 {data?.locations.map(({ id, name, description, photo }) => (
   <div key={id}>
     <h3>{name}</h3>
     <img width="400" height="250" alt="location-reference" src={`${photo}`} />
     <br />
     <b>About this location:</b>
     <p>{description}</p>
     <br />
   </div>
 ))};
 </div>
 );

};