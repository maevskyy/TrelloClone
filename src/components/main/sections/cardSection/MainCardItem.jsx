import React from 'react';

const MainCardItem = (props) => {

  

    return (
        <div className=" w-full mt-3 py-2 px-2 bg-white rounded-sm shadow-md text-black text-sm ">
        <div className="">
          {props.cards.title}
        </div>
        </div>
    );
}

export default MainCardItem;
