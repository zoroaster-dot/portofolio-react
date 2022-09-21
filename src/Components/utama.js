import React from 'react';
import {BrowserRouter as Route} from 'react-router-dom';
import {BrowserRouter as Switch} from 'react-router-dom';

import Beranda from './beranda';
import Tentangsaya from './tentangsaya';
import Kontak from './kontak';

const Utama = () => (
        <Switch>
            <Route exact path="/" component={Beranda}/>
            <Route path="/Tentangsaya" component={Tentangsaya}/>
            <Route path="/Kontak" component={Kontak}/>
        </Switch>   
)

export default Utama;