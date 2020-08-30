import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';
class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDyS1-p-VABSOxv9mCUlIXmDmuZCHxqK9g',
      authDomain: 'manager-4e6c9.firebaseapp.com',
      databaseURL: 'https://manager-4e6c9.firebaseio.com',
      projectId: 'manager-4e6c9',
      storageBucket: 'manager-4e6c9.appspot.com',
      messagingSenderId: '773480049357',
      appId: '1:773480049357:web:5522c575f111baef93d784',
      measurementId: 'G-SF51H9JR82',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
