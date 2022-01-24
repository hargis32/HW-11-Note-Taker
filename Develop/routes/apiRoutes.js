const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const note = require('express').Router();
const [readFromFile, readAndAppend, writeToFile] = require('../helpers/fsUtils');

note.get('/api/notes', (req,res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

note.post('/api/notes', (req,res) => {
    console.log(req.body);

    const {title, text} = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note successfully added!');
    } else {
        res.error("Note not added, try again!");
    }
});

module.exports = note;