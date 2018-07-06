'use strict'

import utilService from './util.service.js'

var notes = [

    { type: 'note-txt', id: utilService.makeid(), data: { title: 'tally', txt: 'lalalalala' } },
    { type: 'note-img', id: utilService.makeid(), data: { src: 'img/1.jpg' } },
    { type: 'note-list', id: utilService.makeid(), data: { todos: ['go to india', 'to cook carrots'] } },
    {
        type: 'note-list', id: utilService.makeid(), data: { todos: ['go to gym', 'to cook kuba'] },
    },


]


function query() {
    return Promise.resolve(notes)
}


function getNoteById(id) {
    let note = notes.find(note => note.id === id);
    // return Promise.resolve(note);
    return new Promise(function (resolve, reject) {
        if (note) {
            resolve(note);
          }
          else {
            reject(Error("no ID"));
          }
    });

}




function saveNote(note) {
    if (note.id) {
        var noteIdx = notes.findIndex(currNote => currNote.id === note.id)
        notes.splice(noteIdx, 1, note)
    } else {
        note.id = makeId();
        notes.push(note);
    }
    console.log('Sevice is saving the note', note);
    console.log(notes)
    return Promise.resolve(note);

}


function saveNoteTxt(note) {
    notes.push(note);
    console.log('Sevice is saving the note', note);
    return Promise.resolve(note);
}



function emptyTxtNote() {

    return {
        type: 'note-txt',
        id: utilService.makeid(),
        data: {
            title: '',
            txt: ''
        },
    }

}


export default {
    query,
    getNoteById,
    saveNote,
    saveNoteTxt,
    emptyTxtNote,
   
}