import { createSong } from './create-song';
import { deleteSong } from './delete-song';
import { addLyricToSong } from './add-lyric-to-song';
import { likeLyric } from './like-lyric';

export const Mutation = {
  createSong,
  deleteSong,
  addLyricToSong,
  likeLyric
};
