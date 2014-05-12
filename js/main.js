
function display(data) {
    $('#photos').empty();
    for (var id in data) {
	$('#photos').append(
	    $('<div class="photo">')
		.append(
		    $('<a>')
			.attr('href', id)
			.attr('target', '_blank')
			.append(
			    $('<img>')
				.attr('src', data[id])
			)
		)
	); 
    }
}

$(document).ready(function() {

    $.ajax({
	url: "http://zipporobotics.github.io/imetdiva/photos.json",
	success: function( data ) {
	    display(data);
	}
    });

});
