checkTotal.addEventListener('click', e => {
	e.preventDefault();
	pizza.getSizePrice();
	pizza.getCrustPrice();
	pizza.getToppingsPrice();
	pizza.getTotal();
});

deliver.addEventListener('click', e => {
	e.preventDefault();
	const myLocation = document.querySelector('#location').value;
	delivered.innerText = `Your pizza will be delivered to 
	${myLocation.replace(/^\w/, c => c.toUpperCase())} in 20 mins`;
});
