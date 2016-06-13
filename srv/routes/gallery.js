var galleryData = require('../data')('gallery');
var u = require('../util');

exports.configure = function (app) {
    app.get('/api/gallery', u.requestHelper(getGallery));
};

function getGallery() {
    return galleryData.getGallery();
};
