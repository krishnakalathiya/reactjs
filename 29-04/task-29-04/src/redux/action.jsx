import { INCREMENT , DECREMENT } from "./constant"

export const increment = () => {
  return{
    type:INCREMENT
  }
}

export const decrement = () => {
  return{
    type:DECREMENT
  }
}