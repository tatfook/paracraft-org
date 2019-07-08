'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.index.index.index);
  router.get('/letter', controller.index.index.index);
};