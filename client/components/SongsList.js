import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import { Query } from './../graphql';
import { Header } from './Header';

const SongsList = ({ data: { loading, songs } }) => {
  if (loading) {
    return <div>loading..</div>;
  }

  return (
    <React.Fragment>
      <Header>
        <h4>Songs List</h4>
        <NewSongLink />
      </Header>
      <ul className="collection">
        {songs.map(song => (
          <li className="collection-item" key={song.id}>
            {song.title}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const NewSongLink = () => (
  <Link to="/songs/new" className="btn-floating waves-effect waves-light red" title="Add a new Song">
    <i className="material-icons">add</i>
  </Link>
);

const SongsListGraphQL = graphql(Query.fetchSongs)(SongsList);

export { SongsListGraphQL as SongsList };
