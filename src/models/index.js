import mongoose from 'mongoose';

const config = require('../../config');
const { database } = config;
const { host, user, pass, name, port } = database;

mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${name}`, { useNewUrlParser: true });

const DataSchema = new mongoose.Schema({
  time: {
    digital: String,
    hours: Number,
    minutes: Number,
    text: String,
    total_seconds: Number,
  },
  date: String,
});

const Information = mongoose.model('data', DataSchema, 'data');
const models = { Information }

export default models;
