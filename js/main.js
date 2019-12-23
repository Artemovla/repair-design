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

//Validation forms
// modal__form
	$('.modal__form').validate({
		errorClass: "invalid",
		rules: {
			// правило для одной строки (userName)
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			userPhone: {
				required: true,
				minlength: 11
			},
			// правило для одной строки (userEmail) с обязательным запросом/вводом Email
			userEmail: {
				required: true,
				userPhone: true,
				email: true
			}
		}, //сообщения
		messages: {
			userName: {
				required: "Заполните поле",
				minlength: "Имя должно быть не короче двух букв",
				maxlength: "Имя должно содержать не более 15 букв"
			}, 
			userPhone: {
				required: "Заполните поле",
				minlength: "Номер телефона должен быть не короче 11 цифр"
			},
			userEmail: {
				required: "Заполните поле",
				email: "Введите корректный email"
			},
		}
	});
//control__form
	$('.control__form').validate({
		errorClass: "invalid",
		rules: {
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			userPhone: {
				required: true,
				minlength: 11
			}
		},
		messages: {
			userName: {
				required: "Заполните поле",
				minlength: "Имя должно быть не короче двух букв",
				maxlength: "Имя должно содержать не более 15 букв"
			}, 
			userPhone: {
				required: "Заполните поле",
				minlength: "Номер телефона должен быть не короче 11 цифр"
			}

		}
	});
	// footer__form
	$('.footer__form').validate({
		errorClass: "invalid",
		rules: {
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			userPhone: {
				required: true,
				minlength: 11
			},
			userQuestion: "required"
		},
		messages: {
			userName: {
				required: "Заполните поле",
				minlength: "Имя должно быть не короче двух букв",
				maxlength: "Имя должно содержать не более 15 букв"
			}, 
			userPhone: {
				required: "Заполните поле",
				minlength: "Номер телефона должен быть не короче 11 цифр"
			},
			userQuestion: "Введите ваш вопрос"
		}
	});

//маска для телефона
$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});

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

