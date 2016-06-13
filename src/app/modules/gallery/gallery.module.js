(function() {
    'use strict';

    var module = angular.module('app.gallery', ['ui.router']);

    module.config(appConfig);

    appConfig.$inject = ['$stateProvider'];

    function appConfig($stateProvider) {
        $stateProvider
          .state('app.gallery', {
              url: '/gallery',
              templateUrl: 'app/modules/gallery/list/gallery.html',
              resolve: {
                  dataImages: ['$stateParams', 'galleryResource', function($stateParams, galleryResource) {
                      return galleryResource.query().$promise.then(function(allImages) {
                          return allImages;
                      });
                  }]
              },
              controller: 'GalleryController',
              controllerAs: 'vm'
          });
    }
})();
