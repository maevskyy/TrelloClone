import React, { useState } from 'react';
import { styles } from '../../../styles';

import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import MainCardsAddButton from './MainCardsAddButton';

const MainCards = () => {
  const [createCard, setCreateCard] = useState(true);

  return (
    <div className="mt-8 flex">
        
        <MainCardsAddButton
            createCard ={createCard}
            setCreateCard ={setCreateCard}
        />
    </div>
  );
};

export default MainCards;
