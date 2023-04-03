import React from 'react';
import MainListItem from './MainListItem';

const MainLists = ({ lists, remove, createNewCard, removeCard }) => {
  return (
    <div className="flex gap-2">
      {lists.map((el, index) => (
        <MainListItem
          className=""
          remove={remove}
          el={el}
          key={el.id}
          create={createNewCard}
          removeCard={removeCard}
          //   createCardInRightList={createCardInRightList}
        />
      ))}
    </div>
  );
};

export default MainLists;
