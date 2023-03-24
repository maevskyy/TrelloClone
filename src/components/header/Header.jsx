import React, { useState, useEffect } from 'react';

import logo from '../../assets/logo.png';
import boardMark from '../../assets/boardMark.svg';
import { BsSearch } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FaRegBell } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { styles } from '../../styles';
import { Tooltip } from '@mui/material';

import InfoModal from './InfoModal';
import NotificModal from './NotificModal';
import { indigo } from '@mui/material/colors';

const Header = () => {
  const [filterSearch, setFilterSearch] = useState('');
  const [filterBackLight, setFilterBackLight] = useState(false);
  const [userImg, setUserImg] = useState(
    <FaUserCircle className="w-[2em] h-[2em] hover:cursor-pointer" />
  );

  //!о госпади блять
  const [infoModal, setInfoModal] = useState({
    countClick: 0,
    condition: false,
  });
  const [notificModal, setNotificModal] = useState(false);

  const handlerFilterSearch = (event) => {
    setFilterSearch(event.target.value);
  };

  const infoModalHandler = () => {
    setInfoModal((prev) => ({
      countClick: prev.countClick + 1,
      condition: !prev.condition,
    }));

    if (notificModal) {
      setNotificModal((notificModal) => !notificModal);
    }
  };

  const notificModalHandler = () => {
    setNotificModal((notificModal) => !notificModal);
    if (infoModal) {
      setInfoModal((infoModal) => !infoModal);
    }
  };

  return (
    <header className={`${styles.padding} flex items-center justify-between`}>
      <section className="flex gap-5">
        <a
          href=""
          className=""
        >
          <img
            src={logo}
            className="w-20 select-none"
            alt=""
          />
        </a>
        <div className=" border-r-2 h-7"></div>
        <a
          href="#"
          className="flex items-center gap-2"
        >
          <img
            src={boardMark}
            alt=""
            className='select-none'
          />
          <h3 className="select-none">Boards</h3>
        </a>
        <div className=" border-r-2 h-7"></div>
        <div className="relative border  rounded-full w-[20em] h-[1.875em]">
          <input
            type="text"
            className=" text-black/60 border absolute w-full h-full rounded-full p-2 bg-gray-200 outline-none  text-sm"
            onChange={handlerFilterSearch}
            value={filterSearch}
            onMouseEnter={() =>
              setFilterBackLight((filterBackLight) => !filterBackLight)
            }
            onMouseLeave={() =>
              setFilterBackLight((filterBackLight) => !filterBackLight)
            }
          />
          <div
            className={`${
              filterBackLight ? styles.searchBackLights : ''
            } absolute z-20 right-1 p-1 top-0.5`}
          >
            <BsSearch className="w-[1em] h-[1em]" />
          </div>
        </div>
      </section>

      <section className="flex gap-3 items-center">
        <Tooltip title="Information">
          <div className="border-transparent p-1.5 rounded-full hover:bg-gray-200">
            <AiOutlineExclamationCircle
              className="w-[1.2em] h-[1.2em] hover:cursor-pointer"
              onClick={infoModalHandler}
            />
          </div>
        </Tooltip>
        {infoModal && (
          <InfoModal  
            visible={infoModal.condition}
            setVisible={infoModalHandler}
            count={infoModal.countClick}
          />
        )}
        <Tooltip title="Notifications">
          <div className="border-transparent p-1.5 rounded-full hover:bg-gray-200">
            <FaRegBell
              className="w-[1.2em] h-[1.2em] hover:cursor-pointer"
              onClick={notificModalHandler}
            />
          </div>
        </Tooltip>
        {notificModal && (
          <NotificModal
            visible={notificModal}
            setVisible={setNotificModal}
          />
        )}
        <div className="w-[2em] h-[2em] hover:cursor-pointer">{userImg}</div>
      </section>
    </header>
  );
};

export default Header;
