const{ MongoClient } = require("mongodb");

const uri = "mongodb+srv://peryteil:WqvhlW49rZKH8OYn@cluster0.idvbp9c.mongodb.net/board?retryWrites=true&w=majority";

module.exports = function (callback) {
    return MongoClient.connect(uri, callback);
};