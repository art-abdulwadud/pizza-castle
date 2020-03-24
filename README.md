## Pizza Caste

A small web app for demontrating how Javascript constructors work when using ES6 syntax. It's an easy way to get you started with classes in Javascript ES6 syntax.

[View site](https://art-abdulwadud.github.io/pizza-castle/)

First, we create the class

```
class Pizza {
}
```

then the constructor within it

```
class Pizza {
	constructor(){}
}
```

The constructor in our class here represents the class itself. every time we create a `new` instace of the class, the constructor is called. We are gonna use the constructor to give our Pizza class some properties.

```
class Pizza {
	constructor(size, crust, topping){
		this.size = size;
		this.crust = crust;
		this.toppings = toppings;
	}
}
```

Getting value from a HTML `select` tag is pretty straight forward.
For our HTML

```
<select name="size" id="size" class="ml-2 selector small-text">
    <option value="1000">Large Pizza</option>
    <option value="700">Medium Pizza</option>
    <option value="500">Small Pizza</option>
</select>

<select name="crust" id="crust" class="ml-2 selector small-text">
    <option value="300">Thick crust</option>
    <option value="200">Deep crust</option>
    <option value="100">Thin crust</option>
</select>

<select name="toppings" id="toppings" class="ml-2 selector small-text">
    <option value="70">Pepperoni</option>
    <option value="100">Mashrooms</option>
    <option value="40">Onions</option>
    <option value="90">Extra cheese</option>
</select>
```

We used the `value` attrivute of the `option` tag to store the price of each item and the `innerText` of the `option` tag to store the name of each item.
Now, to store the prices of of each size of pizza(i.e large, medium, small), each crust(i.e thick crust, deep crust, thin crust) and each toppings(i.e pepperoni, mashrooms, onions, extra cheese), we going to create global variables.

```
let sizePrice, crustPrice, toppingsPrice
```

We want to get the item names and item prices selected by our users.
HTML for displaying the selected items and the total

```
 <p class="small-text yellowish" id="size-info"></p>
 <p class="small-text yellowish" id="crust-info"></p>
 <p class="small-text yellowish" id="toppings-info"></p>
 <span class="small-text yellowish">Total: Ksh
 	<span class="small-text yellowish" id="total-info"></span>
 </span>
```

Create a method for getting them and storing them in the Pizza object properties we created with the constructor(i.e size, crust, toppings). We'll then create a method for calculating the total.

```
const sizeSelector = document.querySelector('#size');
const crustSelector = document.querySelector('#crust');
const toppingsSelector = document.querySelector('#toppings');

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
		crustInfo.innerText = `${this.crust} is Ksh. ${crustPrice}`;
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
```

Finally, we are going to new up an instance of our class.

```
const pizza = new Pizza()
```

Create a button for making the order and displaying all the items selected and the total to the user.

```
<button class="p-btn small-text mb-2" id="check-total" type="submit">Check Total</button>
```

And call our methods within an event listener.

```
const checkTotal = document.querySelector('#check-total');

checkTotal.addEventListener('click', e => {
	e.preventDefault();
	pizza.getSizePrice();
	pizza.getCrustPrice();
	pizza.getToppingsPrice();
	pizza.getTotal();
})
```
