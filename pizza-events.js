checkTotal.addEventListener('click', e => {
	e.preventDefault();
	pizza.getSizePrice();
	pizza.getCrustPrice();
	pizza.getToppingsPrice();
	pizza.getTotal();
});
