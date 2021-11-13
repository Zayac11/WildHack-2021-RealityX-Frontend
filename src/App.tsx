import React, {FC} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import '../src/common/style.scss'
import Main from './components/Main/Main';
import Login from './components/Login/Login';

const App:FC = () => {
    return (
        <Switch>
            <Route exact path='/login' render={() => <Login />} />
            <Route exact path='/' render={() => <Main />} />

        </Switch>



    );
}

export default App;
