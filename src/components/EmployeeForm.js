import React, {Component} from 'react';
import {Picker, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions/';
import {CardSection, Input} from '../components/common';
class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jone"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({prop: 'name', value})
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-555"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({prop: 'phone', value})
            }
          />
        </CardSection>
        <CardSection>
          <Text style={styles.shiftTitleStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            style={styles.pickerStyle}
            onValueChange={value =>
              this.props.employeeUpdate({prop: 'shift', value})
            }>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  shiftTitleStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
  pickerStyle: {
    flex: 1,
  },
  cardSectionStyle: {
    flexDirection: 'column',
  },
};
const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};
export default connect(
  mapStateToProps,
  {employeeUpdate},
)(EmployeeForm);