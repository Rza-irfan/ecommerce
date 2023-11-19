import {createSlice} from '@reduxjs/toolkit';
const initialState = [];
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state, action){
            const foundItem = state.find(item => item.id === action.payload);
            console.log(foundItem);
            if(!foundItem)
                state.push(action.payload);
        },
        increment(state, action){
            const updatedState = state.map((item) => {
                if(item.id===action.payload){
                    return {...item,quantity:item.quantity+1};
                }
                return item;
            })
            return updatedState;
        },
        decrement(state, action){
            const updatedState = state.map((item) => {
                if(item.id===action.payload&&item.quantity!==1){
                    return {...item,quantity:item.quantity-1};
                }
                return item;
            })
            return updatedState;
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});
export const {add, increment, remove,decrement} = cartSlice.actions;
export default cartSlice.reducer;