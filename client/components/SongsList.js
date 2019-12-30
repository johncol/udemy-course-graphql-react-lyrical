import React from 'react';
import { graphql } from 'react-apollo';

import { fetchSongsQuery } from './../queries';

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

const SongsListGraphQL = graphql(fetchSongsQuery)(SongsList);

export { SongsListGraphQL as SongsList };
