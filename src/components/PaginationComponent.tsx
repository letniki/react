import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {PaginatedPageModel} from "../models/PaginatedPageModel";

interface IProps{
    prev: null | PaginatedPageModel;
    next: null | PaginatedPageModel;
}
const PaginationComponent: FC<IProps> = ({prev, next}) => {
    const [query, setQuery] = useSearchParams({page: '1'});

        const changePage = (prevOrNext: string) =>{
            switch (prevOrNext) {
                case 'prev':
                    setQuery({...prev});
                    break
                case('next'):
                    setQuery({...next});
                    break
            }
        }


    return (
        <div>
            <button disabled={!prev} onClick={()=>{
                changePage('prev')
            }}
            >prev</button>
            <button disabled={!next} onClick={()=>{
                changePage('next')
            }}
            >next</button>
        </div>
    );
};

export default PaginationComponent;