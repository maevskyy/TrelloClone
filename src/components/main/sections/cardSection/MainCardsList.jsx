import React from 'react';
import MainCardItem from './MainCardItem';

const MainCardsList = ({cards, remove, card}) => {
    return (
        <div className='flex-col gap-2'>
            {cards.map((el, index) => 
            <MainCardItem className="" remove={remove} cards={el}  card key={el.id}/>
            )}
        </div>
    );
}

export default MainCardsList;
