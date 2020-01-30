import React from "react";
import './app.css';
import {Switch, Route} from "react-router-dom";
import HomePage from "../pages/home-page";
import EditorPage from "../pages/editor-page";
import Header from "../header/header";


const App = () => {
    return(
        <main role='main' className='container'>
            <Header />
            <Switch>
                <Route
                    path='/'
                    component={HomePage}
                    exact
                />
                <Route
                    path='/editor/'
                    exact
                    component={EditorPage}
                />
                <Route
                    path='/editor/:id'
                    render={({match}) => {
                        return <EditorPage cardId={match.params.id}/>
                    }}
                />
            </Switch>
        </main>
    )
};

export default App