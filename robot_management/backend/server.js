const express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');

require('dotenv').config();

var app = express();
const port = process.env.PORT || 4000;
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const deliveriesRouter = require('./routes/deliveries');
const robotsRouter = require('./routes/robots');

app.use('/deliveries', deliveriesRouter);
app.use('/robots', robotsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});