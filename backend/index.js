const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');
require('dotenv').config();

const app = express();
const port = 3001;
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/todos', todoRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err,
  });
});

app.listen(port, () => {
  console.log(`Server starting on port ${port}`);
});
