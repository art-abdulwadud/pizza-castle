let sizePrice, crustPrice, toppingsPrice;

class Pizza {
	constructor(size, crust, toppings) {
		this.size = size;
		this.crust = crust;
		this.toppings = toppings;
	}

	getSizePrice() {
		const selectedOpt = sizeSelector.options[sizeSelector.selectedIndex];
		this.size = selectedOpt.text;
		sizePrice = selectedOpt.value;
		sizeInfo.innerText = `${this.size} is Ksh. ${sizePrice}`;
	}
	getCrustPrice() {
		const selectedOpt = crustSelector.options[crustSelector.selectedIndex];
		this.crust = selectedOpt.text;
		crustPrice = selectedOpt.value;
		crustInfo.innerText = `${this.crust} is Ksh. ${sizePrice}`;
	}
	getToppingsPrice() {
		const selectedOpt = toppingsSelector.options[toppingsSelector.selectedIndex];
		this.toppings = selectedOpt.text;
		toppingsPrice = selectedOpt.value;
		toppingsInfo.innerText = `${this.toppings} is Ksh. ${toppingsPrice}`;
	}
	getTotal() {
		totalInfo.innerText = parseInt(sizePrice) + parseInt(crustPrice) + parseInt(toppingsPrice);
	}
}

const pizza = new Pizza();
