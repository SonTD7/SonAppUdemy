const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConect = (callback) => {

MongoClient.connect(
  "mongodb+srv://sontd:de150308s@sonapp.j5u7nsh.mongodb.net/?retryWrites=true&w=majority"
)
  .then(result => {
    console.log('Connected!');
  })
  .catch((err) => {
    console.error(err);
  });
};

module.exports = mongoConect;
