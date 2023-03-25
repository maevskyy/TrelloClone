import React, { useState } from 'react';
import { styles } from '../../../styles';

import MainCardsAddButton from './MainCardsAddButton';
import MainLists from './MainLists';

const MainCards = () => {
  const [createCard, setCreateCard] = useState(false);

  const [lists, setLists] = useState([

      {title: 'First Post', body: '', id: 1},
      {title: 'Second Post', body: '', id: 2}


  ]);

  const createList = (newList) => {
    setLists([...lists, newList]);
    setCreateCard(false);
  };

  console.log(lists);

  return (
    <div className="mt-8 flex gap-2">
      <MainLists
        // remove={removePost}
        // post={sortedAndSearchedPosts}
        lists={lists}
      />

      <MainCardsAddButton
        createList={createList}
        createCard={createCard}
        setCreateCard={setCreateCard}
      />
    </div>
  );
};

export default MainCards;
