import React, { useState } from 'react';

export const CreateSong = ({}) => {
  const [title, setTitle] = useState('');
  const updateTitle = event => setTitle(event.target.value);

  return (
    <React.Fragment>
      <h4>Add a new Song</h4>
      <form autoComplete="off">
        <label htmlFor="title"></label>
        <input id="title" placeholder="e.g. Crazy" value={title} onChange={updateTitle} />
      </form>
    </React.Fragment>
  );
};
