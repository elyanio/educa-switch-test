import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";


const token = process.env.EXPO_API_TOKEN;
const endpoint = process.env.EXPO_API_ENDPOINT;

const makeApolloClient = () => {
        // create an apollo link instance, a network interface for apollo client
        const link = new HttpLink({
        uri: `${endpoint}`,
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        // create an inmemory cache instance for caching graphql data
        const cache = new InMemoryCache()
        // instantiate apollo client with apollo link instance and cache instance
        const client = new ApolloClient({
          link,
          cache
        });
        return client;
      }

      export default makeApolloClient;