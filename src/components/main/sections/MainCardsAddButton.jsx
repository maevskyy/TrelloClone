import React, { useState } from 'react';

import { styles } from '../../../styles';

import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

const MainCardsAddButton = ({ createList, setCreateLists, createLists }) => {

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
    setCreateLists(createLists => !createLists)
  }



  return (
    <div>
      {createLists ? (
        <div className={`w-[17em]  p-[0.35em] rounded-sm bg-black/5 shadow-md`}>
          <input
            className=" w-full border-blue-500 border-2 outline-none px-2 py-1 text-sm rounded-sm mb-1"
            placeholder="List name"
            onChange={e => setListInfo({...listInfo, title: e.target.value})}
            value={listInfo.title}
          />
          <div className="flex gap-2 ">
            <button
              className="bg-blue-500 text-white px-2 py-1 text-sm  font-medium rounded-sm text-black/60"
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
          Add new list
        </button>
      )}
      
    </div>
  );
};

export default MainCardsAddButton;
