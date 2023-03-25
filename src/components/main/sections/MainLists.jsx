import React from 'react';
import MainListItem from './MainListItem';

const MainLists = ({lists}) => {
    return (
        <div className='flex gap-2'>
            {lists.map((el, index) => 
            <MainListItem className="" lists={el} key={el.id}/>
            )}
        </div>
    );
}

export default MainLists;
