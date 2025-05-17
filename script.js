// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
	window.onscroll = function () {
		const navbar = document.getElementById("navbar");
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			navbar.classList.add("shrink");
		} else {
			navbar.classList.remove("shrink");
		}
	};

// Nav smooth scroll
	$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
				}, 80, function(){
			window.location.hash = hash;
				});
		}
	});
	});
	
// header information slider
(function() {
  var autoUpdate = false,
      timeTrans = 4000;
  
	var cdSlider = document.querySelector('.cd-slider'),
		item = cdSlider.querySelectorAll("li"),
		nav = cdSlider.querySelector("nav");

	item[0].className = "current_slide";

	for (var i = 0, len = item.length; i < len; i++) {
		var color = item[i].getAttribute("data-color");
		item[i].style.backgroundColor=color;
	}

	// Detect IE to hide ripple effect on IE9
	var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE");
		if ( msie > 0 ) {
			var version = parseInt(ua.substring(msie+ 5, ua.indexOf(".", msie)));
			if (version === 9) { cdSlider.className = "cd-slider ie9";}
	}

	if (item.length <= 1) {
		nav.style.display = "none";
	}

	updateNavColor();

	function updateNavColor () {
		var currentSlide = cdSlider.querySelector("li.current_slide");

		var nextColor = ( currentSlide.nextElementSibling !== null ) ? currentSlide.nextElementSibling.getAttribute("data-color") : item[0].getAttribute("data-color");
		var	prevColor = ( currentSlide.previousElementSibling !== null ) ? currentSlide.previousElementSibling.getAttribute("data-color") : item[item.length-1].getAttribute("data-color");

		if (item.length > 2) {
			nav.querySelector(".prev").style.backgroundColor = prevColor;
			nav.querySelector(".next").style.backgroundColor = nextColor;
		}
	}

	nav.querySelector(".next").addEventListener('click', function(event) {
		event.preventDefault();
		nextSlide();
		updateNavColor();
	});

	nav.querySelector(".prev").addEventListener("click", function(event) {
		event.preventDefault();
		prevSlide();
		updateNavColor();
	});
  
  //autoUpdate
  setInterval(function() {
    if (autoUpdate) {
      nextSlide();
      updateNavColor();
    };
	},timeTrans);

})();