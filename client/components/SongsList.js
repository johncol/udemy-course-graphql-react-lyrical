import React from 'react';

export const SongsList = ({}) => {
  const songs = [
    { id: '1', title: 'Perdona' },
    { id: '2', title: 'Perfect' },
    { id: '3', title: 'Goodbyt My Lover' }
  ];
  return (
    <ul className="collection">
      {songs.map(song => (
        <li className="collection-item" key={song.id}>
          {song.title}
        </li>
      ))}
    </ul>
  );
};
