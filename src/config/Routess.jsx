import React from 'react';

import {Route, Routes} from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

const Routess = () => {
  return (
    <Routes>
        <Route 
        path='/:category/search/:keyword' 
        component={Catalog} 
        />
        <Route 
        path='/:category/id' 
        component={Detail} 
        />
        <Route 
        path='/:category' 
        component={Catalog} 
        />
        <Route 
        path='/' 
        exact
        component={Home} 
        />
    </Routes>
  );
}

export default Routes;