import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

import App from '../src/components/app/app';
import ErrorBoundry from "./components/error-boundry/error-boundry";
import PostcardService from "./services/service";
import {PostcardServiceProvider} from "./components/postcard-service-context/postcard-service-context";

import store from "./store";

const postcardService = new PostcardService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <PostcardServiceProvider value={postcardService}>
                <Router>
                    <App />
                </Router>
            </PostcardServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);