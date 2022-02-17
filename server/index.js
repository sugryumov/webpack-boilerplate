const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const PORT = 3001;
const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log(`Listening at http://localhost/${PORT}`);
});
