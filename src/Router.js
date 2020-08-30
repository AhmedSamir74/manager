/* eslint-disable prettier/prettier */
import React from 'react';
import LoginFrom from './components/LoginForm';
import {Router, Scene, Actions} from 'react-native-router-flux';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
const RouterComponent = () => {
  return (
    <Router>
      <Scene title="root" hideNavBar>
        <Scene key="auth">
            <Scene key="loginPg" title="Login" component={LoginFrom} initial />
        </Scene>
        <Scene key="main">
            <Scene
            rightTitle ="Add"
            onRight = {() => Actions.employeeCreate()}
            key="listEmployeesPg"
            title="Employees"
            component={EmployeeList}
            initial
            />

            <Scene
            key="employeeCreate"
            title="Employee Create"
            component= {EmployeeCreate}
            />

            <Scene
            key="employeeEdit"
            title="Employee Edit"
            component= {EmployeeEdit}
            />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
