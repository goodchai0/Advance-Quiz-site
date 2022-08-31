// import { createStore } from "redux"
// import reducer from './reducer';

// export default createStore(reducer);

import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducer'

const store = configureStore({ reducer: rootReducer })

export default store;