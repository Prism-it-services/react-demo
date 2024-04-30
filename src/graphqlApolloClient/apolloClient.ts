import { ApolloClient, InMemoryCache, gql, ApolloProvider, HttpLink} from '@apollo/client';


//When you have time, change URI to environment variables for security reasons.

const httpLink = new HttpLink({

    uri: 'https://flyby-router-demo.herokuapp.com/',
    headers: {
        'x-api-key': 'YOUR_APPSYNC_API_KEY'
      }

});

export const client = new ApolloClient({
link: httpLink,
cache: new InMemoryCache(),

});


