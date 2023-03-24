import React, { useState } from 'react';

import { styles } from '../../../styles';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { MdOutlinePublic } from 'react-icons/md';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import { GrStorage } from 'react-icons/gr';
import { FaUserCircle } from 'react-icons/fa';

const MainNavBar = () => {
  const [likedAndPrivat, setLikedAndPrivat] = useState({
    isLiked: false,
    isPrivat: false,
  });


  return (
    <nav className="select-none flex items-center justify-between">
      <section className="flex items-center gap-[7.2em]">
        <h1 className=" font-[500]  text-xl">Brackets</h1>
        <div className="flex gap-2 items-center">
          <div
            onClick={() =>
              setLikedAndPrivat((prev) => ({ ...prev, isLiked: !prev.isLiked }))
            }
            className=""
          >
            <div className="cursor-pointer">
              {likedAndPrivat.isLiked ? (
                <AiFillHeart className={`${styles.iconShape} text-red-500`} />
              ) : (
                <AiOutlineHeart className={`${styles.iconShape}`} />
              )}
            </div>
          </div>
          <div className="border-r-2 h-7"></div>
          <div
            onClick={() =>
              setLikedAndPrivat((prev) => ({
                ...prev,
                isPrivat: !prev.isPrivat,
              }))
            }
            className=""
          >
            <div className="flex items-center cursor-pointer gap-1 w-[4.5em]">
              {likedAndPrivat.isPrivat ? (
                <RiGitRepositoryPrivateFill className={`${styles.iconShape}`} />
              ) : (
                <MdOutlinePublic className={`${styles.iconShape}`} />
              )}
              {likedAndPrivat.isPrivat ? 'Privat' : 'Public'}
            </div>
          </div>
          <div className="border-r-2 h-7"></div>
          <GrStorage className={`${styles.iconShape}`} />
        </div>
      </section>
      <section className='flex items-center gap-[3em]'>
        <div className="">
        <FaUserCircle className={`${styles.iconShape}`}/>
        </div>
        <button>
          Menu
        </button>
      </section>
    </nav>
  );
};

export default MainNavBar;
