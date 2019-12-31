import React from 'react';
import { useHistory } from 'react-router';
import { useMutation } from 'react-apollo';

import { Mutation, Query } from './../graphql';

export const SongsListItem = ({ id, title }) => {
  const history = useHistory();
  const navigateToSongDetail = () => history.push(`/songs/${id}`);

  const [deleteSong] = useMutation(Mutation.deleteSong, {
    ignoreResults: true,
    refetchQueries: [{ query: Query.fetchSongs }]
  });
  const handleDelete = event => {
    event.stopPropagation();
    deleteSong({ variables: { id } });
  };

  return (
    <li
      style={{ cursor: 'pointer' }}
      onClick={navigateToSongDetail}
      className="collection-item"
      style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
    >
      <span>{title}</span>
      <i className="material-icons" onClick={handleDelete} style={{ color: '#666' }}>
        delete
      </i>
    </li>
  );
};
