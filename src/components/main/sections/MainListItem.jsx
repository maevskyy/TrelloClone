import React, { useState } from 'react';

import { styles } from '../../../styles';

import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { GoKebabVertical } from 'react-icons/go';

import MainCardsList from './cardSection/MainCardsList';

const MainListItem = (props) => {
  const [createListCard, setCreateListCard] = useState(false);
  const [card, setCard] = useState({
    title: '',
    condition:'',
  });
  const [cards, setCards] = useState([]);

  console.log(card);

  const removeCard = (oneCard) => {
    setCards(cards.filter(el => el.id !== oneCard.id))
  }

  const createCard = (newCard) => {
    setCards([...cards, newCard]);
    setCreateListCard(false);
  };

  


  return (
    <div className=" min-w-[17em] max-w-fit h-fit bg-black/5 pt-2 pb-1 pl-2 pr-1 rounded-sm text-black/60 flex-col items-center shadow-md ">
      <div className="flex justify-between items-center pl-2 pr-0">
        <h1 className=" text-black font-medium">{props.lists.title}</h1>
        <div className="p-1 rounded-md hover:bg-gray-200  hover:cursor-pointer">
          <GoKebabVertical onClick={() => props.remove(props.lists)} />
        </div>
      </div>

      <MainCardsList
        card={card}
        cards={cards}
        remove={removeCard}
      />

      {createListCard ? (
        <div className={`w-full mt-3 rounded-sm `}>
          <textarea
            className=" w-full shadow-md h-14 outline-none px-2 py-1 text-sm rounded-sm mb-1 resize-none"
            placeholder="Enter the name of this card"
            value={card.title}
            onChange={e => setCard({...card, title: e.target.value})}
          />
          <div className="flex gap-2 ">
            <button className="bg-blue-500 text-white px-2 py-1 text-sm  font-medium rounded-sm text-black/60" onClick={createCard}>
              Create card
            </button>
            <button>
              <AiOutlineClose
                className={`${styles.iconShape} hover:cursor-pointer`}
                onClick={() =>
                  setCreateListCard((createListCard) => !createListCard)
                }
              />
            </button>
          </div>
        </div>
      ) : (
        <button
          className={`${styles.searchBackLights} w-[14em] mt-3 bg-transparent text-sm hover:bg-black/5 hover:text-black/80 py-1 px-2 rounded-sm text-black/60 flex items-center gap-1`}
          onClick={() => setCreateListCard((createListCard) => !createListCard)}
        >
          <AiOutlinePlus />
          Add new card
        </button>
      )}
    </div>
  );
};

export default MainListItem;
