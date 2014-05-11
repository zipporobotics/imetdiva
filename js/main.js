
function add_photo(url) {
    return $('<img>')
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

function display(data) {
    $('#photos').empty();
    for (var id in data) {
	$('#photos').append(
	    $('<div class="photo">')
		.append(
		    $('<img>')
			.attr('src', data[id])
		)
	); 
    }
}

$(document).ready(function() {

    $.ajax({
	url: "photos.json",
	success: function( data ) {
	    display(data);
	}
    });

});
