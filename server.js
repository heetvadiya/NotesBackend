//load env variables
if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}
//importing dependencies
const express = require('express');
const connect = require('./config/connect');
const notesController = require('./controller/notesController');

//connect to db 
connect();

//create an express app

const app = express();

//configure express
app.use(express.json());

app.get('/notes', notesController.fetchNotes);

app.get('/notes/:id', notesController.fetchNote);

app.post('/notes', notesController.createNote);

app.put('/notes/:id', notesController.updateNote);

app.delete('/notes/:id', notesController.deleteNote);

app.get('/about', (req, res) => {
    res.send('About')
});

//start server

app.listen(process.env.PORT, () => {
    console.log('Server is running on port' + process.env.PORT);
});