'use strict'


import utilService from '../services/util.service.js'
import storageService from '../services/storage.service.js'
const EMAILS_KEY = 'EMAILS'

export default {
    query,
    timeRecieved,
    compareByDate,
    compareBySubject,
    saveEmails
}


function saveEmails(emails) {
    storageService.store(EMAILS_KEY, emails)
}

function compareByDate(a, b) {
    return a.sentAt - b.sentAt
}

function compareBySubject(a, b) {
    return a.subject < b.subject
}

function timeRecieved(sentAt) {
    var dateStr = JSON.stringify(new Date(sentAt))
    var timeDiff = Date.now() - sentAt
    if (timeDiff < 86400000) {
        return dateStr.slice(12, 17)
    } else if (timeDiff < 31536000000) {
        return dateStr.slice(6, 11)
    } else {
        return dateStr.slice(1, 11)
    }
}


function query() {
    return Promise.resolve(emails)
}














var emails = [{
        subject: 'hey you',
        body: 'thank you for everything, you are great.',
        isRead: false,
        sentAt: Date.now() - 85000000,
        id: utilService.makeid()
    },
    {
        subject: 'have you heard about dudu_faruk.js?',
        body: 'dudu faruk is an amazing library i think you would like.',
        isRead: false,
        sentAt: Date.now() - 8640000000,
        id: utilService.makeid()
    },
    {
        subject: 'have you decided to embrace our lord and savior yaron biton?',
        body: 'when god created the world only he and yaron biton knew how it was coded.',
        isRead: true,
        sentAt: Date.now() - 34560000000,
        id: utilService.makeid()
    },
    {
        subject: 'to whoever is reading this',
        body: 'i love you.',
        isRead: false,
        sentAt: Date.now() - 5961600000,
        id: utilService.makeid()
    }
]