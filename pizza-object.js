let sizePrice, crustPrice, toppingsPrice;

class Pizza {
	constructor(size, crust, toppings) {
		this.size = size;
		this.crust = crust;
		this.toppings = toppings;
	}

	getSizePrize() {
		this.size = prompt('Enter size');
		this.size === 'large'
			? (sizePrice = 1000)
			: this.size === 'medium'
			? (sizePrice = 700)
			: this.size === 'small'
			? (sizePrice = 500)
			: (sizePrice = 0);
		return sizePrice;
	}
	getCrustPrice() {
		this.crust = prompt('Enter Crust');
		this.crust === 'thick crust'
			? (crustPrice = 300)
			: this.crust === 'deep crust'
			? (crustPrice = 200)
			: this.crust === 'thin crust'
			? (crustPrice = 100)
			: (crustPrice = 0);
		return crustPrice;
	}
	getToppingsPrice() {
		this.toppings = prompt('Enter toppings');
		this.toppings === 'pepperoni'
			? (toppingsPrice = 70)
			: this.toppings === 'mashrooms'
			? (toppingsPrice = 100)
			: this.toppings === 'onions'
			? (toppingsPrice = 40)
			: this.toppings === 'extra cheese'
			? (toppingsPrice = 90)
			: (toppingsPrice = 0);
		return toppingsPrice;
	}
}

const pizza = new Pizza();
