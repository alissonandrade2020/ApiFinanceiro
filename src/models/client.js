import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  cpf: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      unique: true,
      require: true,
      lowercase: true,
  },
  createdAt: {
      type: Date,
      default: Date.now,
  },
});

export const ClientModel = mongoose.model('Client', schema);

