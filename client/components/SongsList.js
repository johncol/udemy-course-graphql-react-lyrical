import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { Query } from './../graphql';
import { Header } from './Header';
import { Loading } from './Loading';

export const SongsList = () => {
  const { loading, data } = useQuery(Query.fetchSongs);
  if (loading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <Header>
        <h4>Songs List</h4>
        <NewSongLink />
      </Header>
      <Songs songs={data.songs} />
    </React.Fragment>
  );
};

const NewSongLink = () => (
  <Link to="/songs/new" className="btn-floating waves-effect waves-light red" title="Add a new Song">
    <i className="material-icons">add</i>
  </Link>
);

const Songs = ({ songs }) => {
  const history = useHistory();
  return (
    <ul className="collection">
      {songs.map(song => (
        <li
          key={song.id}
          className="collection-item"
          style={{ cursor: 'pointer' }}
          onClick={() => history.push(`/songs/${song.id}`)}
        >
          {song.title}
        </li>
      ))}
    </ul>
  );
};
