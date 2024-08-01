import {StoreType} from "../models/StoreType";
import {create} from "zustand";

export const useStore = create<StoreType>((set)=>({
    counter:0,
    inc: () => {
        set((state) => ({counter: state.counter + 1}));
    },
    dec:() =>{
        set((state) => ({counter: state.counter - 1}));
    }
}))

