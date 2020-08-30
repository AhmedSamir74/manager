//Import libraies
import React from 'react';
import {Text, View} from 'react-native';

//Create Component
const Header = props => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    // justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOfset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    elevation: 2,
    postion: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

//export component
export {Header};
