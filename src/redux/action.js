import {ADD_TO_CART,REMOVE_TO_CART} from "./constant"


export const addToCart =(data) =>{
    console.warn("Action Called", data)
    return {
        type: 'ADD_TO_CART',
        data
    }
}
export const removeToCart =(data) =>{
    console.warn("Action Called", data)
    return {
        type: 'REMOVE_TO_CART',
        data
    }
}