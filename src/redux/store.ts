import {ActionReducerMapBuilder, configureStore, createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {configure} from "@testing-library/react";
import {useDispatch, useSelector} from "react-redux";

type CounterStateType={
    value:number
}
let initialStateCounterSlice1: CounterStateType = {
    value:0,
}

const counterSlice1 = createSlice({
    name: 'counter1SliceName',
    initialState: initialStateCounterSlice1,
    reducers: {
        increment:(state)=>{
            state.value = state.value + 1;
        },
        decrement:(state)=>{
            state.value = state.value - 1;
        },
        incrementByAmount:(state, action:PayloadAction<number>) =>{
            state.value =state.value + action.payload;
        }
    }
});

export const {
    increment,
    decrement,
    incrementByAmount
} = counterSlice1.actions;

export const store = configureStore({reducer: {
    counter1SliceState: counterSlice1.reducer
    }});
 export type AppDispatch = typeof store.dispatch;

 export type RootState = ReturnType<typeof store.getState>;

 export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

 export const useAppSelector = useSelector.withTypes<RootState>();
