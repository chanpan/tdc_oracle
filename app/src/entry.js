import React from 'react'
import {render} from 'react-dom'
import App from './App'
import {BrowserRouter,Route} from 'react-router-dom';

import HomesComponent from './components/homes/home.component';
import SettingComponent from './components/settings/setting.component';
render(
    <BrowserRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="/home" component={HomesComponent}/>
            <Route path="/setting" component={SettingComponent}/>
        </div>
    </BrowserRouter>,
    document.getElementById('app')
)
