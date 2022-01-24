const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes');
const [readFromFile, readAndAppend, writeToFile] = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.Port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/html', html);
app.use(express.static('public'));

app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/', (req, res) => 
  res.sendfile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);