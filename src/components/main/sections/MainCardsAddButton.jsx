import React, { useState } from 'react';

import { styles } from '../../../styles';

import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

const MainCardsAddButton = ({ createList, setCreateCard, createCard }) => {

  const [listInfo, setListInfo] = useState({
    title: '',
    body: ''
  });


  const handlerFunc = (e) => {
    const newList = {
        ...listInfo,
        id: Date.now()
    }
    setListInfo({title: '', body: ''})
    createList(newList)
  }

  const closeHandler = () => {
    setCreateCard(createCard => !createCard)
  }



  return (
    <div>
      {createCard ? (
        <div className={`w-[14em] border p-2 rounded-sm bg-black/10 shadow-md`}>
          <input
            className=" w-full border-blue-300 border-2 outline-none px-2 py-1 text-sm rounded-sm mb-1"
            placeholder="Name of the card"
            onChange={e => setListInfo({...listInfo, title: e.target.value})}
            value={listInfo.title}
          />
          <div className="flex gap-2 ">
            <button
              className="bg-blue-300 px-2 py-1 text-sm rounded-sm text-black/60"
              onClick={listInfo.title === '' ? null : handlerFunc}
            >
              Create
            </button>
            <button onClick={closeHandler}>
              <AiOutlineClose className={`${styles.iconShape}`} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={closeHandler}
          className={`${styles.searchBackLights} w-[14em] bg-black/10 hover:bg-black/5 hover:text-black/80 py-2 px-5 rounded-sm text-black/60 flex items-center gap-1 shadow-md`}
        >
          <AiOutlinePlus />
          Add new one
        </button>
      )}
      
    </div>
  );
};

export default MainCardsAddButton;
