import { useReducer } from "react";

const reducer = {state, action} => {
    if(action.type === 'buy_ingredients') return {money: state.money - 100};
    if(action.type === 'sell_a_meal') return {money: state.money + 100};
    return state
}

function Reducer (){
    const initialState ={money: 100};
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({type: 'buy_ingredients'})}>Shopping for veggies</button>
                <button onClick={() => dispatch({type: 'sell_a_meal'})}>Serve a meal to the the customer </button>
            </div>
        </div>
    )
}
export default Reducer;