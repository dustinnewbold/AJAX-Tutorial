;(function($) {
	// Handlebars
	var source   = $('#twitter-template').html(),
		template = Handlebars.compile(source),
		$feed    = $('.twitter-feed');

	$(document).ready(function() {
		// Code goes here
		$.ajax({
			url	     : 'http://localhost/php/twitter-feed/src/',
			type     : 'GET',
			dataType : 'json',
			success  : function(data) {
				$.each(data, function() {
					var tweet 	 = this,
						username = tweet.user.screen_name,
						image    = tweet.user.profile_image_url,
						post     = tweet.text,
						$post    = $('<div>');

					$post.append('<img src="' + image + '">');
					$post.append('<a href="http://www.twitter.com/' + username + '">' + username + '</a>');
					$post.append('<p>' + post + '</p>');
					$feed.append($post);

				});
				fancy.init();
			},
			error    : function(xhr) {
				console.log(xhr);
			}
		});
	});
})(jQuery);