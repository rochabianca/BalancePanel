import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnXNnkS7xINh3a6w5DOqByN0hzouUd-b8",
  authDomain: "balancepanel.firebaseapp.com",
  databaseURL: "https://balancepanel.firebaseio.com",
  projectId: "balancepanel",
  storageBucket: "balancepanel.appspot.com",
  messagingSenderId: "250000219007"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

//init firebase instance
firebase.initializeApp(firebaseConfig);
//init firestore
// const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create initial state
const initialState = {};

//  Create Store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;