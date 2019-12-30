import gql from 'graphql-tag';

export const createSong = gql`
  mutation CreateSong($title: String) {
    addSong(title: $title) {
      id
    }
  }
`;
