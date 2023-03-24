import React from 'react';
import { styles } from '../../styles';

import MainNavBar from './sections/MainNavBar';
import MainCards from './sections/MainCards';

const Main = () => {
    return (
        <div className={`${styles.padding} flex-col mt-4`}>
            <MainNavBar/>
            <MainCards/>
        </div>
    );
}

export default Main;
