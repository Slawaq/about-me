'use strict'
const xss = require('xss');

var pages = [{
  path: '/', 
  name: 'Home'
},{
  path: '/biography', 
  name: 'Biography'
},{
  path: '/products', 
  name: 'Products'
},{
  path: '/contacts', 
  name: 'Contacts'
}]

let isDev = req => ['127.0.0.1','localhost'].indexOf(req.hostname) !== -1

module.exports = app => {
  app.get(pages.map(x => x.path), (req, res) => {
    res.render('index', { page: xss(req.path), pages, isDev: isDev(req) })
  })

  app.use((req, res, next) => {
    res.render('404', { status: 404, url: req.url })
  })

  app.use((req, res, next) => {
    res.render('500', {
      code: err.status || 500, 
      error: err
    })
  })
}
