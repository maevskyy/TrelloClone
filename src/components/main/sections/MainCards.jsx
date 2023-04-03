import React, { useState } from 'react';
import { styles } from '../../../styles';

import MainCardsAddButton from './MainCardsAddButton';
import MainLists from './MainLists';

const MainCards = () => {
  const [createLists, setCreateLists] = useState(false);

  const [lists, setLists] = useState([
    { title: 'First Post', id: 1, cards: [] },
    { title: 'Second Post', id: 2, cards: [] },
  ]);

  const createList = (newList) => {
    setLists([...lists, newList]);
    setCreateLists(false);
  };

  // const createCardInRightList = (newCard) => {
  //   setLists(lists.filter(el => el.id == newCard.id ? setLists(prev => ({...prev, cards: [newCard]})) : 'wrong place'))
  // }

  const removeList = (oneList) => {
    setLists(lists.filter((el) => el.id !== oneList.id));
  };

  const removeCard = (card, index) => {
    console.log(lists);
  }
  const createNewCard = (newCard, index) => {
    index.cards.push(newCard);
    console.log(lists);
  };

  return (
    <div className="mt-8 flex gap-2">
      <MainLists
        lists={lists}
        setLists={setLists}
        remove={removeList}
        createNewCard={createNewCard}
        removeCard={removeCard}
        // cards={cards}
        // setCards={setCards}
        // createCardInRightList={createCardInRightList}
      />

      <MainCardsAddButton
        createList={createList}
        createLists={createLists}
        setCreateLists={setCreateLists}
      />
    </div>
  );
};

export default MainCards;
