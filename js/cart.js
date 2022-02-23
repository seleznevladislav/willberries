const cart = function(){
	const cartBtn = document.querySelector('.button-cart');
	const cart = document.getElementById('modal-cart');
	const cross = document.querySelector('.modal-close');



	cartBtn.addEventListener('click', function(){
		cart.style.display = 'flex';
	});
	cross.addEventListener('click', function(){
		cart.style.display = '';
	});
};

cart();