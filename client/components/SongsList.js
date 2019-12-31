import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { Query } from './../graphql';
import { Header } from './Header';
import { Loading } from './Loading';
import { SongsListItem } from './SongsListItem';

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
  <Link to="/new-song" className="btn-floating waves-effect waves-light red" title="Add a new Song">
    <i className="material-icons">add</i>
  </Link>
);

const Songs = ({ songs }) => {
  return (
    <ul className="collection">
      {songs.map(({ id, title }) => (
        <SongsListItem key={id} id={id} title={title} />
      ))}
    </ul>
  );
};
