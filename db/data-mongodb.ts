module.exports = {
  mongodb: {
    url: 'mongodb://127.0.0.1:27017/test',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  path: 'db/migration',
  driver: 'mongodb',
};
