import React, {FC} from 'react';
import {CarWithAuthModel} from "../models/CarWithAuthModel";
import CarComponent from "./CarComponent";

interface IProps{
    cars:CarWithAuthModel[];
}
const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map((car, i) => <CarComponent key={i} car={car}/>)
            }
        </div>
    );
};

export default CarsComponent;