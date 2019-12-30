import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { Header } from './Header';
import { Query } from './../graphql';

export const SongsList = () => {
  const { loading, data } = useQuery(Query.fetchSongs);
  if (loading) {
    return <div>loading..</div>;
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

const Songs = ({ songs }) => (
  <ul className="collection">
    {songs.map(song => (
      <li className="collection-item" key={song.id}>
        {song.title}
      </li>
    ))}
  </ul>
);
