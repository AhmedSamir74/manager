import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communication from 'react-native-communications';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions/';
import {Card, CardSection, Button, Confirm} from './common/';
import EmployeeForm from './EmployeeForm/';
class EmployeeEdit extends Component {
  state = {showModal: false};
  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      console.log(prop, value);
      this.props.employeeUpdate({prop, value});
    });
  }
  onButonPress() {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }
  onTextPress() {
    const {phone, shift} = this.props;

    Communication.text(phone, `Your Upcoming Shift Is At ${shift}`);
  }
  onAccept() {
    const {uid} = this.props.employee;
    this.props.employeeDelete({uid});
  }
  onDecline() {
    this.setState({showModal: false});
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButonPress.bind(this)}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedual</Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() => this.setState({showModal: !this.state.showModal})}>
            Fire Employee
          </Button>
        </CardSection>
        <CardSection>
          <Confirm
            visable={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}>
            Are You Sure you want to delete this ?
          </Confirm>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(
  mapStateToProps,
  {employeeUpdate, employeeSave, employeeDelete},
)(EmployeeEdit);
