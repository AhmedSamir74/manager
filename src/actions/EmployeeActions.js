import {
  EMPLOYEEUPDATE,
  EMPLOYEECREATE,
  EMPLOYEESFETCHSUCCESS,
  EMPLOYEESAVEDSUCCESS,
} from './types';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
export const employeeUpdate = ({prop, value}) => {
  // console.log({prop, value});
  // console.log(EMPLOYEEUPDATE);
  return {
    type: EMPLOYEEUPDATE,
    payload: {prop, value},
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  return dispatch => {
    console.log(name, phone, shift);
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEECREATE});
        Actions.pop();
      });
  };
};

export const employeesFetch = () => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({type: EMPLOYEESFETCHSUCCESS, payload: snapshot.val()});
      });
  };
};

export const employeeSave = ({name, phone, shift, uid}) => {
  const {currentUser} = firebase.auth();
  // console.log(currentUser.uid);
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        // console.log('saved!!');
        dispatch({type: EMPLOYEESAVEDSUCCESS});
        Actions.pop();
      });
  };
};

export const employeeDelete = ({uid}) => {
  const {currentUser} = firebase.auth();
  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => Actions.pop());
  };
};
