import { ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';


//When you have time, change URI to environment variables for security reasons.

const httpLink = new HttpLink({

    uri: 'https://26rcstle4bfvdbygbz2hm3nxky.appsync-api.us-east-1.amazonaws.com/graphql',
    headers: {
        'x-api-key': 'da2-i4ad6kifavft5fv6ivseqa3yhy'
      }

});

export const client = new ApolloClient({
link: httpLink,
cache: new InMemoryCache(),

});


