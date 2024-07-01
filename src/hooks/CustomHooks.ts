import {useRef, useState} from "react";

// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
// import { useState } from "react"

const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue);

    const toggleValue = () => setValue(!value);
    return [value, toggleValue] as const;
};

// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable

const usePrevious=<T>(value:T):T | undefined=>{
    const currentValue = useRef<T>(value);
    const previousValue = useRef<T|undefined>();
    if (currentValue.current !== value) {
        previousValue.current = currentValue.current;
        currentValue.current = value;
    }
    return previousValue.current;
}

export {useToggle, usePrevious};