jQuery(function($) {
    $('.instagram').on('willLoadInstagram', function(event, options) {
	console.log(options);
    });
    $('.instagram').on('didLoadInstagram', function(event, response) {
	console.log(response);
    });
    $('.instagram').instagram({
	hash: 'love',
	clientId: 'cbaf79de77bf45b7a2994d6b5ec0b3a7'
    });
});