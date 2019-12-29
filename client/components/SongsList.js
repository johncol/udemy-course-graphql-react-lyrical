import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const SongsList = ({ data: { loading, songs } }) => {
  if (loading) {
    return <div>loading..</div>;
  }

  return (
    <ul className="collection">
      {songs.map(song => (
        <li className="collection-item" key={song.id}>
          {song.title}
        </li>
      ))}
    </ul>
  );
};

const query = gql`
  query {
    songs {
      id
      title
    }
  }
`;

const SongsListGraphQL = graphql(query)(SongsList);

export { SongsListGraphQL as SongsList };
