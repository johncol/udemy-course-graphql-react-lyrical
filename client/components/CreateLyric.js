import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { Mutation } from './../graphql/mutations';

export const CreateLyric = () => {
  const { id: songId } = useParams();
  const [addLyricToSong] = useMutation(Mutation.addLyricToSong, {});

  const [content, setContent] = useState('');
  const updateContent = event => setContent(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    addLyricToSong({ variables: { songId, content } });
    setContent('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h5>Add a new lyric to this song</h5>
      <label htmlFor="lyric-content">Lyric content</label>
      <input id="lyric-content" value={content} onChange={updateContent} />
    </form>
  );
};
