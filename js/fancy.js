var Fancy = function() {
	this.el = $('.twitter-feed');
};

Fancy.prototype.init = function() {
	$('h1').hide();
	this.el.children('div').hide();
	this.animate();
}

Fancy.prototype.animate = function() {
	console.log('Animating');
	var $current = fancy.get_current(),
		$post    = fancy.get_next();

	if ( $current ) {
		$current.animate({
			top     : '200px',
			opacity : '0'
		}, {
			duration: 1500
		});
	}

	$post.css({
		'position' : 'absolute',
		'top'      : '-100px',
		'left'     : '100px',
		'opacity'  : '0'
	});
	$post.show().animate({
		'top'     : '100px',
		'opacity' : '1'
	}, {
		duration: 1500
	});

	setTimeout(fancy.animate, 7000);
}

Fancy.prototype.get_next = function() {
	if ( this.get_current() === false ) {
		$(this.el).children('div').first().addClass('active');
	} else {
		if ( this.get_current() && this.get_current().next().length == 0 ) {
			$(this.el).children('.active').removeClass('active');
			$(this.el).children('div').first().addClass('active');
		} else {
			var $current = this.get_current();
			$current.next().addClass('active');
			$current.removeClass('active');
		}
	}

	return $(this.el).children('.active');
}

Fancy.prototype.get_current = function() {
	if ( $(this.el).children('.active').length > 0 ) {
		return $(this.el).children('.active');
	} else {
		return false;
	}
}

var fancy = new Fancy();