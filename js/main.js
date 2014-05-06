
function createPhotoElement(photo) {
    var innerHtml = $('<img>')
        .addClass('instagram-image')
        .attr('src', photo.images.thumbnail.url);

    innerHtml = $('<a>')
        .attr('target', '_blank')
        .attr('href', photo.link)
        .append(innerHtml);

    return $('<div>')
        .addClass('instagram-placeholder')
        .attr('id', photo.id)
        .append(innerHtml);
}

function displayPhotos(event, response) {
    var that = this;
    $(that).empty();
    $.each(response.data, function(i, photo) {
	$(that).append(createPhotoElement(photo));
    });
}

jQuery(function($) {
    $('.instagram').on('willLoadInstagram', function(event, options) {
	console.log(options);
    });

    $('.instagram').on('didLoadInstagram', displayPhotos);

    $('.instagram').instagram({
	hash: 'selfie',
	clientId: 'cbaf79de77bf45b7a2994d6b5ec0b3a7',
	count: 33
    });
});