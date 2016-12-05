/* global System */

import {browserHistory} from 'react-router';
import App from './App';
import Home from './pages/Home';
import {fetchAPI} from './utilities/api/fetchAPI';
import {store} from './store';


const history = browserHistory;

// Function handle error load a page
function errorLoadRoute(err) {
    // On error loaded page we can redirect user to 404 page or error page.
    console.error('Loaded page failed', err);
}


function loadRoute(cb) {
    return (module) => cb(null, module.default);
}

const routes = {

    component: App,
    path: '/',
    indexRoute: {component: Home},
    childRoutes: [
        {
            path: 'product/:id',

            getComponent: (location, cb)=> {
                System.import('./pages/ProductDetail').then(loadRoute(cb)).catch(errorLoadRoute);
            },

            onEnter: (nextState, replace, callback) => {

                fetchAPI(`/assets/mock/product/${nextState.params.id}.json`).then((data)=> {
                    store.dispatch({
                        'type': 'PRODUCT_DETAIL',
                        payload: data
                    });
                    callback();
                }).catch(()=> {
                    replace('/404');
                    callback();
                })

            }
        },
        {
            path: '404',
            getComponent: (location, cb)=> {
                System.import('./pages/PageNotFound').then(loadRoute(cb)).catch(errorLoadRoute);
            }
        },
        {
            path: '*',
            getComponent: (location, cb)=> {
                System.import('./pages/PageNotFound').then(loadRoute(cb)).catch(errorLoadRoute);
            }
        },
    ]

};

export {routes, history}