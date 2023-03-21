import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Switch } from '@mui/material';

import { GoKebabVertical } from 'react-icons/go';

const NotificModal = ({ visible, setVisible }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`${
        visible ? 'flex' : 'hidden'
      } fixed top-12 right-0 bottom-0 left-0 justify-end`}
      onClick={() => setVisible(false)}
    >
      <section
        className="w-[30em] h-96 bg-gray-200 m-2 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex my-7 mx-5 items-end justify-between pb-6 border-b border-black/75">
          <h3 className='text-xl font-semibold'>Notifications</h3>
          <div className="flex items-center gap-2">
            <label htmlFor="switchToggleNotif" className=' text-xs'>only show unread</label>
            <Switch
              onChange={() => setToggle((toggle) => !toggle)}
              size="small"
              id="switchToggleNotif"
              defaultChecked
              
            />
            <div className=" bg-transparent p-1 rounded-md hover:bg-gray-300">
                <GoKebabVertical
                    onClick={''}
                    className='w-[1.2em] h-[1.2em] hover:cursor-pointer'
                />
            </div>
          </div>
        </nav>
        <main>

        </main>

      </section>
    </div>
  );
};

export default NotificModal;
