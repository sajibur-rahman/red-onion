import React, { useEffect, useState } from 'react';
import Meal from '../../Shared/Meal/Meal';

const Breakfast = () => {
    const [breakfasts,setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
        .then((res) => res.json())
        .then((data) => setBreakfasts(data));
    },[])
    return (
        <div className='grid grid-cols-3'>
            {
                breakfasts.map((breakfast) => <Meal meal={breakfast}/>)
            }
        </div>
    );
};

export default Breakfast;