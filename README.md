## Pizza Caste

A small web app for demontrating how Javascript constructors work when using ES6 syntax. It's an easy to get you started.

View site https://art-abdulwadud.github.io/pizza-castle/

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

We used the `value` attrivute of the `select` tag to store the price of each.
Now, to store the prices of of each size of pizza(i.e large, medium, small), each crust(i.e thick crust, deep crust, thin crust) and each toppings(i.e pepperoni, mashrooms, onions, extra cheese), we going to create global variables.

```
let sizePrice, crustPrice, toppingsPrice
```
