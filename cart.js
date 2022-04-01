///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


const summedPrice = cart.reduce((a, c) => {
    return a + c.price
}, 0)

console.log(summedPrice)



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let totalWithTax = cartTotal *= (1+tax)
    return totalWithTax - couponValue
}

console.log(calcFinalPrice(15, 2, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*

const customerObject = {
    name: 'name', (John Smith is a string of letters)
    address: 'address', (address is a string of characters and numbers)
    city: 'city, (city is a string)
    zip: zip (zip is a number)
    phone number: 'phone number', (phone number is a string of numbers and special characters)
    credit card number: credit card number (card number is a number string)
}


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customerObject = {
    name: "John Smith",
    address: '1234 General ln',
    city: 'Milwaukee',
    zip: 53202,
    phoneNumber: '123-456-7890',
    creditCardNumber: 1234567890123456
}
