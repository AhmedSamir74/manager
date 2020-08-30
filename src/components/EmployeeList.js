import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {employeesFetch} from '../actions/';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }
  renderItem(employee) {
    return <ListItem data={employee} />;
  }
  render() {
    // console.log(this.props.employees);
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={employee => String(employee.phone)}
      />
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  const employees = _.map(state.employeesList, (val, uid) => {
    return {...val, uid};
  });
  return {employees};
};

export default connect(
  mapStateToProps,
  {employeesFetch},
)(EmployeeList);
