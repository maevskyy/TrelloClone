import React, { useState, useRef, useImperativeHandle } from 'react';

import { styles } from '../../../styles';

import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

const MainCardsAddButton = ({ createCard, setCreateCard }) => {
  const cardTitle = useRef('');

  console.log(cardTitle);

  const titleHandler = (e) => {
    e.preventDefault()
    `x`
  }


  return (
    <div>
      {createCard ? (
        <div className={`w-[14em] border p-2 rounded-sm bg-black/10`}>
          <form>
            <input
              className=" w-full border-blue-300 border-2 outline-none px-2 py-1 text-sm rounded-sm mb-1"
              placeholder="Name of the card"
              value={cardTitle.current}
            />
            <div className="flex gap-2">
              <button
                onClick={titleHandler}
                className="bg-blue-300 px-2 py-1 text-sm rounded-sm text-black/60"
              >
                Create
              </button>
              <button onClick={() => setCreateCard((prev) => !prev)}>
                <AiOutlineClose className={`${styles.iconShape}`} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setCreateCard((prev) => !prev)}
          className={`${styles.searchBackLights} w-[14em] bg-black/10 hover:bg-black/5 hover:text-black/80 py-2 px-5 rounded-sm text-black/60 flex items-center gap-1`}
        >
          <AiOutlinePlus />
          Add new one
        </button>
      )}
    </div>
  );
};

export default MainCardsAddButton;
