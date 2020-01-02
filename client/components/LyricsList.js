import React from 'react';

export const LyricsList = ({ lyrics }) => {
  return (
    <ul className="collection">
      {lyrics.map(lyric => (
        <li className="collection-item" key={lyric.id}>
          {lyric.content}
        </li>
      ))}
    </ul>
  );
};
