import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { Query } from './../graphql';
import { Loading } from './Loading';
import { LinkBackToList } from './LinkBackToList';

export const SongDetail = props => {
  const { id } = useParams();
  const { loading, data } = useQuery(Query.fetchSong, {
    variables: { id }
  });

  if (loading) {
    return <Loading />;
  }

  const { song } = data;
  return (
    <React.Fragment>
      <LinkBackToList />
      <h4>{song.title}</h4>
      {song.lyrics.map(lyric => (
        <p key={lyric.id}>{lyric.content}</p>
      ))}
    </React.Fragment>
  );
};
