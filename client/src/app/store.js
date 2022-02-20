import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import goalReducer from '../features/goals/goalSlice';


// holds applications global state
export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer
  },
});

// State (store) is updated by creating an "action" object that describes 
// something that happened in the app. The action is then dispatched to 
// the store to tell it what happened. The store then notifies subscribers
// that the state has been updated so that the UI can be updated with the
// new data.
// from: https://redux.js.org/tutorials/fundamentals/part-1-overview#the-redux-store

// * actions are dispatched in response to a user interaction like a click
// * the store runs the reducer function on the state to calculate a new state
// * the UI reads the new state to display the new values

// An action is an object that has a type field that looks like: "domain/eventName"
// A reducer is a function that does this: (state, action) => newState
// Reducers are not allowed to modify existing state since it is immutable

// store.dispatch(action) => newStore

// selectors are functions that allow the app to grab pieces of data from the store

// The store is the single source of truth
// The store is read-only
// Changes to the store are made with pure reducer functions

// IN DEPTH FLOW
// __ Initial Setup __
// * Store is created using a root reducer function
// * Store calls the reducer once and saves the value as its initial state
// *  When the UI is first rendered, UI components access the current state 
//    of the Redux store, and use that data to decide what to render. They 
//    also subscribe to any future store updates so they can know if the 
//    state has changed.
// __ Updates __
// * Something happens in the app
// * An action is dispatched to the redux store
// * Store runs the reducer function with the previous state and the current action
// * Store saves the return value as the new state
// * Store notifies all parts of the UI that subscribe to it
// * Each UI component that needs data from the store checks to see if the part of state that changed was relevant to it
// * Each component that sees its data has changed re-renders