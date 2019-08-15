'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.index.index.index)
  router.get('/contact', controller.index.index.index)
  router.get('/whoWeAre', controller.index.index.index)
  router.get('/letter', controller.index.index.index);
  router.get('/download', controller.index.index.index)
};