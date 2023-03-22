import React, { useState, useEffect } from 'react';

import dataInfo from '../../data/infoModalData';

const InfoModal = ({ visible, setVisible, count }) => {
  const [randomTip, setRandomTip] = useState({

    id: dataInfo[2].id,
    img: dataInfo[2].img,
    text: dataInfo[2].text,
  });


useEffect(() => {
  if(count > 1){
    const {id, img, text} = dataInfo[Math.floor(Math.random() * dataInfo.length)]
    setRandomTip(prevEl => ({
      id,
      img,
      text,
    }))
}
},[visible])




  return (
    <div
      className={`${
        visible ? 'flex' : 'hidden'
      } fixed top-12 right-0 bottom-0 left-0 justify-end`}
      onClick={setVisible}
    >
      <section
        className="w-96 h-fit bg-gray-100 m-2 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-4 p-5 text-center items-center">
          <div className="flex flex-col bg-transparent hover:cursor-pointer items-center hover:bg-slate-200 rounded-md">
            <img
              src={randomTip.img}
              alt=""
              className="rounded-md"
              id="idInfoModalImg"
            />
            <label
              htmlFor="idInfoModalImg"
              className=" items-center w-10/12 text-sm px-4 pt-2 font-medium hover:cursor-pointer"
            >
              {randomTip.text}
            </label>
          </div>
          <div className="underline text-sm pb-1 text-gray-500 hover:cursor-pointer hover:text-gray-600">
            New tip.
          </div>
          <div className="border-b w-full border-gray-400"></div>
          <div className="flex flex-wrap-reverse gap-2 w-[200px] justify-center">
            <div className='underline text-sm pb-1  bg-transaprent rounded-sm p-1.5  text-gray-500 hover:cursor-pointer hover:no-underline hover:bg-gray-200'>Applications</div>
            <div className='underline text-sm pb-1  bg-transaprent rounded-sm p-1.5 text-gray-500 hover:cursor-pointer hover:no-underline hover:bg-gray-200'>Help</div>
            <div className='underline text-sm pb-1  bg-transaprent rounded-sm p-1.5 text-gray-500 hover:cursor-pointer hover:no-underline hover:bg-gray-200'>Privacy</div>
            <div className='underline text-sm pb-1  bg-transaprent rounded-sm p-1.5 text-gray-500 hover:cursor-pointer hover:no-underline hover:bg-gray-200'>Blog</div>
            <div className='underline text-sm pb-1 bg-transaprent rounded-sm p-1.5 text-gray-500 hover:cursor-pointer hover:no-underline hover:bg-gray-200'>Prices</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoModal;

