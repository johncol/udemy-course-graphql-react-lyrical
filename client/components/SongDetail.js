import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { Query } from './../graphql';
import { Loading } from './Loading';
import { LinkBackToList } from './LinkBackToList';
import { CreateLyric } from './CreateLyric';
import { LyricsList } from './LyricsList';

export const SongDetail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(Query.fetchSong, { variables: { id } });

  if (loading) {
    return <Loading />;
  }

  const { song } = data;
  return (
    <React.Fragment>
      <LinkBackToList />
      <h4>{song.title}</h4>
      <section>
        <LyricsList lyrics={song.lyrics} />
      </section>
      <section style={{ marginTop: 40 }}>
        <CreateLyric />
      </section>
    </React.Fragment>
  );
};
