'use strict'

import utilService from './util.service.js'

var notes = [

    { type: 'note-txt', id: utilService.makeid(), color: '#FFFFFF', data: { title: 'tally', txt: 'lalalalala' } },
    { type: 'note-img', id: utilService.makeid(), color: '#FFFFFF', data: { title: 'image', src: 'img/1.jpg' } },
    { type: 'note-list', id: utilService.makeid(), color: '#FFFFFF', data: { todoId: utilService.makeid(), title: 'go to india', todos: [{txt:'go to school'},{txt:'kdkd'}]} },
    { type: 'note-list', id: utilService.makeid(), color: '#FFFFFF', data: { todoId: utilService.makeid(), title: 'go to burgas',  todos:[{txt:'go to the beach'},{txt:'cook'}]} },

]


function query() {
    return Promise.resolve(notes)
}


function getNoteById(id) {
    let note = notes.find(note => note.id === id);
    // return Promise.resolve(note);
    return Promise.resolve(note)
}


// function saveNote(note) {
//     if (note.id) {
//         var noteIdx = notes.findIndex(currNote => currNote.id === note.id)
//         notes.splice(noteIdx, 1, note)
//     } else {
//         note.id = makeId();
//         notes.push(note);
//     }
//     console.log('Sevice is saving the note', note);
//     console.log(notes)
//     return Promise.resolve(note);

// }


function saveNote(note) {
    notes.push(note);
    console.log('Sevice is saving the note', note);
    return Promise.resolve(note);
}

// function saveNoteImg(note) {
//     notes.push(note);
//     console.log('Sevice is saving the note', note);
//     return Promise.resolve(note);
// }

// function saveNoteList(list){
//     notes.push(note);
//     console.log('Sevice is saving the note', note);
//     return Promise.resolve(note);
// }



function emptyTxtNote() {

    return {
        type: 'note-txt',
        id: utilService.makeid(),
        color: '#FFFFFF',
        data: {
            todoId: utilService.makeid(),
            title: '',
            txt: ''
        },
    }

}


function emptyImgNote() {

    return {
        type: 'note-img',
        id: utilService.makeid(),
        color: '#FFFFFF',
        data: {
            title: '',
            src: ''
        },
    }
}


function emptyListNote() {

    return {
        type: 'note-list',
        id: utilService.makeid(),
        color: '#FFFFFF',
        data: {
            title: '',
            todos: []
        },
    }
}




function getTodos() {



}


export default {
    query,
    getNoteById,
    // saveNote,
    saveNote,
    emptyTxtNote,
    emptyImgNote,
    emptyListNote
    

}