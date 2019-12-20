/**document.addEventListener("DOMContentLoaded", function(event) { 
	const modal = document.querySelector('.modal');
	const modalBtn = document.querySelectorAll('[data-toggle=modal]');
	const closeBtn = document.querySelector('.modal__close');
	const switchModal = () => {
  	modal.classList.toggle('modal--visible');
	}
	modalBtn.forEach(element => {
  	element.addEventListener('click', switchModal);
	});
	
	closeBtn.addEventListener('click', switchModal);
});**/

// modal
$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  }); 
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  
  //sliders
	var mySwiper = new Swiper('.swiper-container', {
    	loop: true,
    	pagination: {
      		el: '.swiper-pagination',
      		type: 'bullets',
    	},
    	navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  		},
  	})
  
  	var next = $('.swiper-button-next');
  	var prev = $('.swiper-button-prev');
  	var bullets = $('.swiper-pagination');

  	next.css('left', prev.width() + 10 + bullets.width() + 10)
	bullets.css('left', prev.width() + 10)
	  
	new WOW().init();  
});

//scrollup
$(document).ready(function() {
 
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
} else {
		$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function() {
	$("html, body").animate({ scrollTop: 0 }, 2000);
		return false;
});
 
});

