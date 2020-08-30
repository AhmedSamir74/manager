import React from 'react';
import {Modal, Text, View} from 'react-native';
// import {CardSection} from './CardSection';
// import {Button} from './Button';
import {CardSection, Button} from './index';

const Confirm = ({children, visable, onAccept, onDecline}) => {
  const {containerStyle, textStyle, cardSectionStyle} = styles;
  return (
    <Modal
      visible={visable}
      transparent
      animationType="slide"
      onRequestClose={() => {}}>
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'center',
    flex: 1,
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  cardSectionStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    // position: 'relative',
    // flex: 1,
    justifyContent: 'center',
  },
};

export {Confirm};
