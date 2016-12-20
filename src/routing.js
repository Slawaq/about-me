'use strict'

var pages = [{
  path: '/', 
  name: 'home'
},{
  path: '/biography', 
  name: 'biography'
},{
  path: '/products', 
  name: 'products'
},{
  path: '/contacts', 
  name: 'contacts'
},{
  path: '/magic', 
  name: 'magic'
}]

module.exports = app => {
  app.get(pages.map(x => x.path), (req, res) => {
    res.render('index', { page: req.path, pages })
  })

  app.use((req, res, next) => {
    res.render('404', { status: 404, url: req.url });
  });

  app.use((req, res, next) => {
    res.render('500', {
      code: err.status || 500, 
      error: err
    });
  });
}
