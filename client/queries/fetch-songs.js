import gql from 'graphql-tag';

export const fetchSongsQuery = gql`
  query {
    songs {
      id
      title
    }
  }
`;
