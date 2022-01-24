const fs = require("fs");
const uuid = require('uuid');
const note = require('express').Router();

note.get('/api/notes', (req,res) => {
    readFromFile('./db/db.json')
})