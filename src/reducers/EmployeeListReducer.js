import {EMPLOYEESFETCHSUCCESS} from '../actions/types';
const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEESFETCHSUCCESS:
      // console.log(action);
      return action.payload;
    default:
      return state;
  }
};
