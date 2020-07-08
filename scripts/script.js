'use strict';


const modalAdd = document.querySelector('.modal__add'),
	  addAd = document.querySelector('.add__ad'),
	  modalBtnSubmit = document.querySelector('.modal__btn-submit'),
	  modalSubmit = document.querySelector('.modal__submit'),
	  card = document.querySelector('.card'),
	  modalItem = document.querySelector('.modal__item'),
	  catalog = document.querySelector('.catalog');



addAd.addEventListener('click', () => {
	modalAdd.classList.remove('hide');
	modalBtnSubmit.disabled = true;
});




modalAdd.addEventListener('click', (event) => {
	const target = event.target;
//closest нужно использовать если внутри есть многоэлементов как в бургер меню, но при этом нужно задать .modal__close
	if(target.classList.contains('modal__close') ||
		target === modalAdd) {
		modalAdd.classList.add('hide');
		modalSubmit.reset();
	}



});



catalog.addEventListener('click', () => {
	modalItem.classList.remove('hide');
});


modalItem.addEventListener('click', (event) => {
	const target = event.target;
//closest нужно использовать если внутри есть многоэлементов как в бургер меню, но при этом нужно задать .modal__close
	if(target.classList.contains('modal__close') ||
		target === modalItem) {
		modalItem.classList.add('hide');
	}


});













function esc(event) {
	if(event.keyCode == '27'){
		modalAdd.classList.add('hide');
		modalSubmit.reset();
	}
}

window.addEventListener('keydown', esc, false);
