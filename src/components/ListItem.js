/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {CardSection} from './common/';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

  onRowPress() {
    Actions.employeeEdit({employee: this.props.data.item});
  }
  render() {
    // console.log(this.props.data.item);
    const {name, shift, uid} = this.props.data.item;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection key={uid}>
            <Text style={styles.titleStyle}>{name} - {shift}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descriptionStyle: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 16,
  },
};

export default ListItem;
