import React from 'react';
import MainListItem from './MainListItem';

const MainLists = ({lists, remove}) => {


    
    return (
        <div className='flex gap-2'>
            {lists.map((el, index) => 
            <MainListItem className="" remove={remove} lists={el} key={el.id}/>
            )}
        </div>
    );
}

export default MainLists;
