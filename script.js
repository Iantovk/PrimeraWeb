var $nav = $('nav');
var $navTop = $nav.offset().top;
var pegarNav = function(){
	var $scrollTop = $(window).scrollTop();
	if($scrollTop >= $navTop){
		$nav.addClass('sticky')
	} else{
		$nav.removeClass('sticky')
	}
}

$(window).on('scroll', pegarNav);

/*responsive slider*/

		   $(function() {
		     $(".rslides").responsiveSlides();
		   });



      /*
       * Open the drawer when the menu ison is clicked.
       */

      var menu = document.querySelector('#menu');
      var main = document.querySelector('main');
      var drawer = document.querySelector('.nav');

      menu.addEventListener('click', function(e) {
        drawer.classList.toggle('open');
        e.stopPropagation();
      });
      main.addEventListener('click', function() {
        drawer.classList.remove('open');
      });

/* toolip*/

