// this file is used to import every slices in this store

import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counter'

// function call with one object argument 

export default configureStore(
    {
        reducer:{
            counter:counterReducer,
        }
    }
)