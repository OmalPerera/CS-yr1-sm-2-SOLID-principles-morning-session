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
