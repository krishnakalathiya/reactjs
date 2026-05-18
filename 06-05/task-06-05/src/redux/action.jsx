import { BUY_CHOCOLATE , BUY_ICECREAM , BUY_CAKE } from "./constant";

export const buyChocolate = () => {
  return {
    type:BUY_CHOCOLATE
  }
}

export const buyIceCream = () => {
  return {
    type:BUY_ICECREAM
  }
} 

export const buyCake = () => {
  return {
    type:BUY_CAKE
  }
}