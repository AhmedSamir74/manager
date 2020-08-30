import {
  EMPLOYEEUPDATE,
  EMPLOYEECREATE,
  EMPLOYEESAVEDSUCCESS,
} from '../actions/types';

const INITIALSTATE = {
  name: '',
  phone: '',
  shift: '',
  employees: null,
};
export default (state = INITIALSTATE, action) => {
  // console.log(action);
  switch (action.type) {
    case EMPLOYEEUPDATE:
      // console.log(action.payload);
      return {...state, [action.payload.prop]: action.payload.value};
    case EMPLOYEECREATE:
      return INITIALSTATE;
    case EMPLOYEESAVEDSUCCESS:
      return INITIALSTATE;
    default:
      return state;
  }
};
