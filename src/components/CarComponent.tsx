import React, {FC} from 'react';
import {CarWithAuthModel} from "../models/CarWithAuthModel";

interface IProps {
    car:CarWithAuthModel;
}
const CarComponent:FC<IProps> = ({car}) => {
    return (
        <div>
           {car.brand} - {car.price} - {car.year}
        </div>
    );
};

export default CarComponent;