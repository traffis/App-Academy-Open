/***********************************************************************
Write a function named: coupon(discount). The coupon function will intake a
number to apply as a discount, and will return a function that accepts an array
of prices. Every call to the function returned by coupon will return the array
of prices with the discount applied.

Example 1:
let tenPercent = coupon(0.1);
console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]

Example 2:
let twentyPercent = coupon(0.2);
console.log(twentyPercent([10, 20, 30])); // [ 8, 16, 24 ]


***********************************************************************/
function coupon(discount) {
  let discountedItems = [];

  return applyDiscount = itemPrices => {
    itemPrices.forEach(function (itemPrice) {
      let discountedPrice = itemPrice * (1 - discount);
      discountedItems.push(discountedPrice);
    });

    return discountedItems;
  };
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = coupon;
} catch (e) {
  return null;
}
