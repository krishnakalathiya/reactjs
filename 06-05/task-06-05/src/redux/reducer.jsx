import { BUY_CHOCOLATE , BUY_ICECREAM , BUY_CAKE } from "./constant";

const initialState = {
  numOfChocolate : 10,
  numOfIceCream : 20,
  numOfCake : 30
}

export const ChcolateReducer = (state = initialState , action) => {
  switch(action.type){
    case BUY_CHOCOLATE:
      if(state.numOfChocolate <= 0){
        return state
      }
      return { ...state , numOfChocolate:state.numOfChocolate - 1}
    default: return state
  }
}


export const IcecreamReducer = (state = initialState , action) => {
  switch(action.type){
    case BUY_ICECREAM:
      return{
        ...state , numOfIceCream:state.numOfIceCream - 1
      }
    default: return state
  }
}

export const CakeReducer = (state = initialState , action) => {
  switch(action.type){
    case BUY_CAKE:
      return{
        ...state , numOfCake:state.numOfCake - 1
      }
    default: return state
  }
}