import { createStore } from 'redux';

function reducer(state, action) {

    let exchangeRate = 1;


    if (action.type === 'BUY') {
        return { 
            doubloons: state.doubloons + 1,
            arrcoins: state.arrcoins - state.exchangeRate,
            exchangeRate: state.exchangeRate
        };
    }

    if (action.type === 'SELL') {
        return { 
            doubloons: state.doubloons - 1,
            arrcoins: state.arrcoins + state.exchangeRate,
            exchangeRate: state.exchangeRate
        }
    }

    if (action.type === 'UPDATE') {
        let exchangeDiff = Math.random() * (10 - 0) + 0;
        console.log(exchangeDiff)

        return {
            doubloons: state.doubloons,
            arrcoins: state.arrcoins,
            exchangeRate: exchangeDiff
        }
    }
    // add conditions for each action
    return state;
}

export const store = createStore(reducer, {
    doubloons: 30,
    arrcoins: 30,
    exchangeRate: 1
});