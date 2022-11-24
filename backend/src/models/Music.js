import mongoose from 'mongoose';

const musicShema = new mongoose.Schema(
  {
    id: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    trackId: { type: Number, required: true },
    audioUrl: { type: String, required: true },
    musicName: { type: String, required: true },
    artistName: { type: String, required: true },
    albumName: { type: String, required: true },
    albumId: { type: Number, required: true },
  },
  {
    versionKey: false,
  },
);

const Music = mongoose.model('fav-musics', musicShema);

export default Music;
