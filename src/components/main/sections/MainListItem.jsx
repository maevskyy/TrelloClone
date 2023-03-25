import React from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { GoKebabVertical } from 'react-icons/go';

const MainListItem = (props) => {
  return (
    <div
      className=' min-w-[14em] max-w-fit h-fit bg-black/10 hover:bg-black/5 hover:text-black/80 py-2 px-5 rounded-sm text-black/60 flex items-center gap-1 shadow-md  justify-between'
    >
        <div className="">{props.lists.title}</div>
        <div className="flex gap-2 items-center">
            <AiOutlinePlus/>
            <GoKebabVertical/>
        </div>
    </div>
  );
};

export default MainListItem;
