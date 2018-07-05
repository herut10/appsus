'use strict'

import utilService from './util.service.js'

var notes = [

    { type: 'note-txt', id: utilService.makeid(), data: { title: 'tally', txt: 'lalalalala' } },
    { type: 'note-img', id: utilService.makeid(), data: { src: 'img/1.jpg', altSrc: './img/1.jpg' } }
]


function query() {
    return Promise.resolve(notes)
}


export default {
    query

}