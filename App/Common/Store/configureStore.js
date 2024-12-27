import {applyMiddleware, createStore, compose} from 'redux'
import app from './Reducers'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './Sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    // const store = createStore(app, applyMiddleware(sagaMiddleware))
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(app, /* preloadedState, */
        composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
    );
    sagaMiddleware.run(rootSaga)
    return store
}