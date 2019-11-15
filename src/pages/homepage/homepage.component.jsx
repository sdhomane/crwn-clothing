import React from 'react';
import {Route, Link} from 'react-router-dom';

import '../../App.css';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;