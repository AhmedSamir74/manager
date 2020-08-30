import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButonPress() {
    const {name, phone, shift} = this.props;

    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }
  render() {
    // console.log(this.props.employee);
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
  // console.log({name, phone, shift});
  return {name, phone, shift};
};

export default connect(
  mapStateToProps,
  {employeeCreate},
)(EmployeeCreate);
