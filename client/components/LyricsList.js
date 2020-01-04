import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { Mutation } from './../graphql';

export const LyricsList = ({ lyrics }) => {
  return (
    <ul className="collection">
      {lyrics.map(lyric => (
        <LyricItem key={lyric.id} lyric={lyric} />
      ))}
    </ul>
  );
};

const LyricItem = ({ lyric: { id, content, likes } }) => {
  const [likeLyricMutation] = useMutation(Mutation.likeLyric, {});

  const likeLyric = () => {
    likeLyricMutation({
      variables: { id }
    });
  };

  return (
    <li className="collection-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>{content}</span>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span>{likes}</span>
        <i className="material-icons" style={{ cursor: 'pointer', marginLeft: 10 }} onClick={likeLyric}>
          thumb_up
        </i>
      </span>
    </li>
  );
};
