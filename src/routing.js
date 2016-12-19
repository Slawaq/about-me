'use strict'

module.exports = app => {
  app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

  app.use(function(req, res, next){
    res.render('404', { status: 404, url: req.url });
  });

  app.use(function(req, res, next){
    res.render('500', {
      code: err.status || 500, 
      error: err
    });
  });
}
