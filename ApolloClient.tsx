import {
  defaultDataIdFromObject,
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import IntrospectionResultData from "./generate/types";

const token = process.env.EXPO_API_TOKEN
const endpoint = process.env.EXPO_API_ENDPOINT

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: IntrospectionResultData as any,
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    fragmentMatcher,
    dataIdFromObject: (object) => {
      switch (object.__typename) {
        case "SearchResultItemConnection":
          return `SearchResultItemConnection`;
        default:
          return defaultDataIdFromObject(object);
      }
    },
  }),
  link: new HttpLink({
    uri: `${endpoint}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
});
