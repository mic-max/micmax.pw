$(() => {

	$('.scroll').click((event) => {
		var hash = event.target.hash
		if(hash) {
			event.preventDefault()
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 400)
		}
	})
})