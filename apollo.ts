export const typePolicies = {
  ComicSeries: {
    keyFields: ["uuid"],
  },
  ComicIssue: {
    keyFields: ["uuid"]
  },
  ComicStory: {
    keyFields: ["uuid"]
  },
  Creator: {
    keyFields: ["uuid"]
  },
  SearchResult: {
    keyFields: ["searchId"]
  },
  User: {
    keyFields: ["id"]
  },
}

export const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};