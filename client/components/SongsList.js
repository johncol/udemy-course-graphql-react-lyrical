import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Query, Mutation } from './../graphql';
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
  <Link to="/new-song" className="btn-floating waves-effect waves-light red" title="Add a new Song">
    <i className="material-icons">add</i>
  </Link>
);

const Songs = ({ songs }) => {
  const history = useHistory();
  const navigateToSongDetail = id => history.push(`/songs/${id}`);
  const [deleteSong] = useMutation(Mutation.deleteSong, {
    ignoreResults: true,
    refetchQueries: [{ query: Query.fetchSongs }]
  });
  const handleDelete = (event, id) => {
    event.stopPropagation();
    deleteSong({ variables: { id } });
  };

  return (
    <ul className="collection">
      {songs.map(({ id, title }) => (
        <SongDetail
          key={id}
          title={title}
          onClick={() => navigateToSongDetail(id)}
          onDelete={e => handleDelete(e, id)}
        />
      ))}
    </ul>
  );
};

const SongDetail = ({ title, onClick, onDelete }) => {
  return (
    <li
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      className="collection-item"
      style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
    >
      <span>{title}</span>
      <i className="material-icons" onClick={onDelete} style={{ color: '#666' }}>
        delete
      </i>
    </li>
  );
};
