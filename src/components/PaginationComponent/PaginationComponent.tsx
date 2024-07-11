import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

interface IProps{
    isDisabled:{
        disablePrev:number,
        disableNext:number
    },
}
const PaginationComponent: FC<IProps> = ( {isDisabled}) => {
    let [searchParams,setSearchParams]=useSearchParams({page:'1'});

    const page = +(searchParams.get('page')||'1');
    console.log(page);
    const isPrevDisabled=Number(page)<=isDisabled.disablePrev;
    const isNextDisabled=Number(page)>=isDisabled.disableNext;
    return (
        <div>
            <button
                disabled={isPrevDisabled}
                onClick={()=>{
                let page=+(searchParams.get('page')||'1');
                let prevPage=(page-1).toString();
                setSearchParams({page: prevPage});
            }}>prev</button>
            <button
                disabled={isNextDisabled}
                onClick={()=>{
               let page= +(searchParams.get('page') || '1');
               let nextPage=(page+1).toString();
               setSearchParams({page:nextPage});
            }}>next</button>
        </div>
    );
};

export default PaginationComponent;