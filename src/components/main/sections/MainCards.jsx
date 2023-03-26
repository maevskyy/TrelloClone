import React, { useState } from 'react';
import { styles } from '../../../styles';

import MainCardsAddButton from './MainCardsAddButton';
import MainLists from './MainLists';

const MainCards = () => {
  const [createLists, setCreateLists] = useState(false);

  const [lists, setLists] = useState([

      {title: 'First Post', body: '', id: 1, cards: []},
      {title: 'Second Post', body: '', id: 2, cards: []}


  ]);

  const createList = (newList) => {
    setLists([...lists, newList]);
    setCreateLists(false);
  };

  const removeList = (oneList) => {
    setLists(lists.filter(el => el.id !== oneList.id))
  }


  return (
    <div className="mt-8 flex gap-2">
      <MainLists
        lists={lists}
        remove={removeList}
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
