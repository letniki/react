import {createContext, useContext} from "react";
import {StoreType} from "../models/StoreType";

const defaultValue= {
    counter:0,
    inc:()=>{},
    dec:()=>{}
}
export let MyContext=createContext<StoreType>(defaultValue);
export const useAppContext =():StoreType => useContext(MyContext);

