(function () {

// Находит элемент по ID:
var btn = document.getElementById('btn');

// Запускает функцию по нажатию кнопки, 
// найденой по ID:
btn.onclick = function (e) {

	e.preventDefault();
	// Находит элемент по селектору:
	var text = document.querySelector('.intro');
	text.classList.add('red');
	var pic = document.querySelector('.travel-pic');
	pic.classList.add('animate__animated', 'animate__flip');
	setTimeout(() => pic.classList.remove('animate__animated', 'animate__flip'), 1000);
}

// $(window).scroll(function() {
// 	$('.section-title').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
//             if (imagePos < topOfWindow+650) {
//                 $(this).addClass("fadeInLeft");
//             }       
// });


  var square = document.querySelector('.coming-block');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__rotateInDownLeft');
      }
    });
  });

  observer.observe(square);


  var square = document.querySelector('.travel');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__lightSpeedInRight');
      }
    });
  });

  observer.observe(square);


  var square = document.querySelector('.values');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__backInLeft');
      }
    });
  });

  observer.observe(square);
})();