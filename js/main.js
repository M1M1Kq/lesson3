/*jshint esversion: 8 */

let counter = 0;

const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) return false;
    }
    if (num >=1) return true;
};
while (counter <= 100) {
    if (isPrime(counter)) {
        console.log(counter);
    }
    counter += 1;   
}

// от 0 до 100 

const cart = [];

for (let i = 0; i < Math.random() * 100; i += 1) {
    const cartItem = { 
        price : Math.ceil(Math.random() * 1000), 
        name : `Cart item #${Math.ceil(i)}`
    };
    cart.push(cartItem);
}
console.log(cart);

let cartPrice = 0;

for (let i = 0; i < cart.length; i += 1) {
    const item = cart[i];
    cartPrice += item.price;
}
console.log(cartPrice);

// Корзина

for (i = 0; i < 9; console.log(i++)) {}

// Без тела цикла

// Не смог сам разобраться со звездочкой