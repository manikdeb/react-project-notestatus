import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer, 
    project: projectReducer,
    firestore: firestoreReducer,  //  To Grab or Retrieve Data
    firebase: firebaseReducer   // For Login 
})

export default rootReducer;