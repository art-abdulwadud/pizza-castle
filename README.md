## Pizza Caste

A small web app for demontrating how Javascript constructors work when using ES6 syntax. It's an easy to get you started.

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
