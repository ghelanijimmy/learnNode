const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://ghelanijimmy:azkmdg2jg@cluster0.gx2ohqg.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected to MongoDB");
      _db = client.db("shop");
      cb();
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB: ", err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database found";
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
