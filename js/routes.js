'use strict'


import appsus from './pages/appsus-cmp.js'
import misterEmail from './pages/misterEmail-cmp.js'
import misterKeeper from './pages/misterKeep-cmp.js'

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
    path: '/misterKeeper',
    component: misterKeeper
  },
];

export default routes;