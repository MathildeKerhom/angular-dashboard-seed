(function() {
    'use strict';

    angular
        .module('app.gallery')
        .controller('GalleryController', galleryController);

    galleryController.$inject = ['dataImages'];
    function galleryController(dataImages) {
        var vm = this;
        vm.images = dataImages;
    }
})();
