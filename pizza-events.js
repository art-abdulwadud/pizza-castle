moveToOrder.addEventListener('click', e => {
	e.preventDefault();
	orderSection.style.display = 'block';

	setTimeout(() => {
		scrollTo(0, orderSection.offsetTop);
		orderSection.setAttribute('id', 'active-sec');
		intro.setAttribute('id', 'inactive-sec');
	}, 1000);
});
checkTotal.addEventListener('click', e => {
	e.preventDefault();
	pizza.getSizePrice();
	pizza.getCrustPrice();
	pizza.getToppingsPrice();
	pizza.getTotal();
	loading.forEach(load => {
		load.style.display = 'block';
		load.innerText = 'Please wait...';
	});
	completeOrder.style.display = 'block';
	setTimeout(() => {
		scrollTo(0, completeOrder.offsetTop);
		loading.forEach(load => {
			load.style.display = 'none';
		});
		completeOrder.setAttribute('id', 'active-sec');
	}, 1000);
	setTimeout(() => {
		orderSection.setAttribute('id', 'inactive-sec');
	}, 2000);
});
cancelOrder.addEventListener('click', e => {
	e.preventDefault();
	scrollTo(0, orderSection.offsetTop);
	orderSection.setAttribute('id', 'active-sec');
	setTimeout(() => {
		completeOrder.setAttribute('id', 'inactive-sec');
	}, 2000);
});
order.addEventListener('click', e => {
	e.preventDefault();
	loading.forEach(load => {
		load.style.display = 'block';
		load.innerText = 'Please wait...';
	});
	delivery.style.display = 'block';
	setTimeout(() => {
		delivery.setAttribute('id', 'active-sec');
		completeOrder.setAttribute('id', 'inactive-sec');
		orderSection.setAttribute('id', 'inactive-sec');
		scrollTo(0, delivery.offsetTop);
		loading.forEach(load => {
			load.style.display = 'none';
		});
	}, 1000);
});
deliver.addEventListener('click', e => {
	e.preventDefault();
	const myLocation = document.querySelector('#location').value;
	if (myLocation !== '') {
		delivered.innerText = `Your pizza will be delivered to 
		${myLocation.replace(/^\w/, c => c.toUpperCase())} in 20 mins`;
		completed.style.display = 'block';
		completed.setAttribute('id', 'active-sec');
		delivery.setAttribute('id', 'inactive-sec');
		scrollTo(0, completed.offsetTop);
		error.innerText = '';
		locationForm.reset();
	} else {
		error.innerText = 'Please enter your location first';
	}
});
newOrder.forEach(order => {
	order.addEventListener('click', e => {
		e.preventDefault();
		intro.setAttribute('id', 'active-sec');
		scrollTo(0, intro.offsetTop);
		setTimeout(() => {
			completeOrder.style.display = 'none';
			orderSection.style.display = 'none';
			delivery.style.display = 'none';
			completed.style.display = 'none';
		}, 1000);
	});
});
