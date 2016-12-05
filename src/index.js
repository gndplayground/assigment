import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {store} from './store';
import Root from './Root';

const root = document.getElementById('root');

const render = (AppRoot) => {

    ReactDOM.render(
        <AppContainer>
            <AppRoot store={store}/>
        </AppContainer>,
        root
    );
};

render(Root);

if (process.env.NODE_ENV === 'development') {

    console.log('Development mode enabled');

    if (module.hot) {
        module.hot.accept('./Root', ()=> {
            const NextApp = require('./Root').default;
            render(NextApp);
        });
    }

}
