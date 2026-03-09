//Concept - Extend behavior without modifying existing code

/*
Bad practice
Why - Adding a new discount requires editing this function.
*/

function calculateDiscount(type: string, price: number) {
  if (type === "student") return price * 0.8
  if (type === "vip") return price * 0.7
  return price
}


/*
Correct way
*/

type Discount = (price: number) => number

const studentDiscount: Discount = price => price * 0.8
const vipDiscount: Discount = price => price * 0.7
const noDiscount: Discount = price => price

const calculatePrice = (price: number, discount: Discount) =>
  discount(price)




// To add a new discount:
const blackFridayDiscount: Discount = price => price * 0.5
