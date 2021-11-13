import React, {FC, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import '../src/common/style.scss'
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {authActions, checkAuthorization} from "./redux/auth-reducer";

const App:FC = () => {
    const dispatch = useDispatch()
    const isInitialize = useSelector((state: AppStateType) => state.auth.isInitialize)

    useEffect(() => {
        if(localStorage.getItem('accessToken')) {
            dispatch(checkAuthorization())
        }
        else {
            dispatch(authActions.setInitialize(true))
        }
    }, [dispatch])

    if(!isInitialize) {
        return <div>Загрузка...</div>
    }

    return (
        <Switch>
            <Route exact path='/login' render={() => <Login />} />
            <Route exact path='/' render={() => <Main />} />
        </Switch>
    );
}

export default App;
