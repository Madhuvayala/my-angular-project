import { createReducer, on } from "@ngrx/store";
import{ increment, decrement, reset } from "./counter.action";
//initial state of the counter
export const initialState = 0;
//creating a reducer function to handle the actions
export const counterReducer = createReducer(
  initialState,
  //on function is used to handle the actions and update the state accordingly
  //on increment action, we increment the state by 1
  on(increment, state => state + 1),
  //on decrement action, we decrement the state by 1
  on(decrement, state => state - 1),
  //on reset action, we reset the state to 0
  on(reset, ()=>initialState)

);