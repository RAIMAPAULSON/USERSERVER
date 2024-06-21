const mongoose = require("mongoose");

mongoose

const connect = async () => {
  return mongoose.connect("mongodb+srv://raimapaulson11:RAIMA@cluster0.olqmoo6.mongodb.net/testDB?retryWrites=true&w=majority&appName=Cluster0");
  };

  module.exports = connect