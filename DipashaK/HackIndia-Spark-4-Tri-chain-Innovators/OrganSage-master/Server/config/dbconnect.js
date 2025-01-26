const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dipasha:dipasha0505@cluster0.n7uyeu6.mongodb.net/organ?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("Connection Established with Test Database!")
});