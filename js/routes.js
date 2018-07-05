'use strict'


import appsus from './pages/appsus-cmp.js'
import misterEmail from './pages/misterEmail-cmp.js'
import misterKeeper from './pages/misterKeep-cmp.js'
import noteEdit from './pages/note-edit-cmp.js';

const routes = [{
    path: '/',
    component: appsus
  },
  {
    path: '/misterEmail/:id',
    component: misterEmail
  },
  {
    path: '/misterEmail',
    component: misterEmail
  },
  {
    path: '/misterKeeper/edit/:noteId?',
    component: noteEdit
  },
  {
    path: '/misterKeeper',
    component: misterKeeper
  },

];

export default routes;