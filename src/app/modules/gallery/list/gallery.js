(function() {
    'use strict';

    angular
        .module('app.gallery')
        .controller('GalleryController', galleryController);

    galleryController.$inject = ['gallery'];
    function galleryController(gallery) {
        var vm = this;
        vm.gallery = gallery;
    }
})();
