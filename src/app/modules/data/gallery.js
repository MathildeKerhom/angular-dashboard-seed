(function() {
    'use strict';

    angular.module('app.data')
        .factory('galleryResource', galleryResource);

    galleryResource.$inject = ['$resource'];

    function galleryResource($resource) {
        return $resource('/api/gallery/');
    }
})();
