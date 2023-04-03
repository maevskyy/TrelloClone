import React, { useState } from 'react';

import { GoKebabVertical } from 'react-icons/go';

const MainCardItem = ({ title, removeCard, id }) => {
  const [openCard, setOpenCard] = useState(false);

  const deleteHandler = (e) => {
      e.stopPropagation()
      removeCard(id)
  }

  return (
    <div className="">
      <div
        className=" w-full mt-3 py-2 px-2 flex justify-between bg-white rounded-sm shadow-md text-black text-sm hover:bg-black/0 hover:text-black/80 hover:cursor-pointer"
        onClick={() => setOpenCard((openCard) => !openCard)}
      >
        <div className="">{title}</div>
        <div className=" bg-transparent p-1 rounded-md hover:bg-gray-300">
          <GoKebabVertical
            onClick={deleteHandler}
            className="w-[1.2em] h-[1.2em] hover:cursor-pointer"
          />
        </div>
      </div>
      {openCard && (
        <div
          className="fixed w-[100%] h-[100%] top-0 left-0 flex justify-center items-center bg-black/30"
          onClick={() => setOpenCard((openCard) => !openCard)}
        >
          <div
            className="bg-white w-[60%] h-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center h-[100%]">
              {title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCardItem;
