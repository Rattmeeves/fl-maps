import '/imports/ui/pages/shared/loading/loading.js';
import '/imports/ui/pages/shared/notFound/notFound.js';

Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading'
});

Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});
