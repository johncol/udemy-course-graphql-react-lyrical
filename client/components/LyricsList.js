import React from 'react';

export const LyricsList = ({ lyrics }) => {
  return (
    <ul className="collection">
      {lyrics.map(lyric => (
        <LyricItem key={lyric.id} lyric={lyric} />
      ))}
    </ul>
  );
};

const LyricItem = ({ lyric }) => {
  return (
    <li className="collection-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>{lyric.content}</span>
      <i className="material-icons" style={{ cursor: 'pointer' }} onClick={() => console.log('id', lyric.id)}>
        thumb_up
      </i>
    </li>
  );
};
