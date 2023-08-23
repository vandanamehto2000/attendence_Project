const mongoose = require ('mongoose');

const mongoURI = `mongodb://127.0.0.1:27017/${process.env.MONGODB_DATABASE}`;

console.log (mongoURI);
mongoose.connect (mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on ('error', console.error.bind (console, 'connection error:'));
db.once ('open', () => {
  console.log ('Connected to MongoDB');
});

module.exports = db;
