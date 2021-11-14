// Step 1 -import Redux module, installed using 'npm i redux';
const redux = require('redux');


/* Step 2 - create a reducer. Reducer always takes two parameters 
i.e. 'current state' and an 'action', and it returns the new mutated state 
and saves it into the store. 
*/
const counterReducer = (currentState = {counter:0}, action) => {
    return {
        counter: currentState.counter + 1
    };
};


/* Step 3 - create a store. Store is always connected to one specific reducer, 
since it needs to know which reducer can make changes in the store.
*/
const globalStore = redux.createStore(counterReducer);


/* Step 4 - create a subscriber. The subscriber is supposed to be fired everytime 
the state changes.
*/
const counterSubscriber = () => {
    console.log(globalStore.getState());
}

/* Step 5 - connect the subscriber to the store using '.subscribe' method.
This method tells redux which subsriber to execute everytime when the state changes.
*/
globalStore.subscribe(counterSubscriber);


/* Step 6 - create an 'action' using '.dispatch' method on the store, which tells reducer 'when' to do something.
"An action is a plain JavaScript object that has a type field. You can think of 
an action as an event that describes something that happened in the application."
*/
globalStore.dispatch({type: 'counter_increment'});


