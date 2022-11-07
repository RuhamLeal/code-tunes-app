import mongoose from 'mongoose';

const musicShema = new mongoose.Schema(
  {
    id: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    audioUrl: { type: String, required: true },
    musicName: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

const Music = mongoose.model('fav-musics', musicShema);

export default Music;
