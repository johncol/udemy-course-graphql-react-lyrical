import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { Mutation, Query } from './../graphql';
import { LinkBackToList } from './LinkBackToList';

export const CreateSong = props => {
  const [title, setTitle] = useState('');
  const updateTitle = event => setTitle(event.target.value);

  const history = useHistory();
  const navigateToList = () => history.push('/songs');

  const [createSong] = useMutation(Mutation.createSong, {
    ignoreResults: true,
    onCompleted: navigateToList,
    refetchQueries: [
      {
        query: Query.fetchSongs
      }
    ]
  });

  const handleSubmit = event => {
    event.preventDefault();
    createSong({ variables: { title } });
  };

  return (
    <React.Fragment>
      <LinkBackToList />
      <h4>Add a new Song</h4>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" placeholder="e.g. Crazy" value={title} onChange={updateTitle} />
      </form>
    </React.Fragment>
  );
};
