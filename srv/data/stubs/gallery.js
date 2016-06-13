var q = require('q');
var stubs = [
    {
        id: 1,
        alt: 'image1',
        uri: 'http://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/idcs1426.jpg?itok=Gc_-Q58L'
    },
    {
        id: 2,
        alt: 'image2',
        uri: 'https://support.files.wordpress.com/2009/07/pigeony.jpg?w=688'
    },
    {
        id: 3,
        alt: 'image3',
        uri: 'http://i.dailymail.co.uk/i/pix/2016/04/13/00/331D901800000578-3536787-image-a-11_1460503122350.jpg'
    },
    {
        id: 4,
        alt: 'image4',
        uri: 'http://referentiel.nouvelobs.com/file/14954208.png'
    },
    {
        id: 5,
        alt: 'image5',
        uri: 'http://referentiel.nouvelobs.com/file/14954208.png'
    },
    {
        id: 6,
        alt: 'image6',
        uri: 'http://republic.pink/images/3/5/0/9/1/1/4/en/1-image.jpg'
    }
];

function getGallery() {
    return q(stubs);
}

exports.getGallery = getGallery;
