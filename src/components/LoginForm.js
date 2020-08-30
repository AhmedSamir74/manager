import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection, Button, Input, Spinner} from './common/';
import {connect} from 'react-redux';
import {emailChnaged, passwordChanged, loginUser} from '../actions/';
class LoginForm extends Component {
  onEmailChange(text) {
    //Call To Action
    this.props.emailChnaged(text);
  }
  onPasswordChanged(text) {
    //Call To Action
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }
  renderError() {
    // console.log(this.props);
    if (this.props.error) {
      return (
        <View style={styles.errorContainerStyle}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderLoginButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    } else {
      return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
    }
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="test@test.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
            onChangeText={this.onPasswordChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>{this.renderLoginButton()}</CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.auth);
  //Map State That Rturned From Reducer To Props.
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};
// Connect form with redux (action)
export default connect(
  mapStateToProps,
  {
    emailChnaged,
    passwordChanged,
    loginUser,
  },
)(LoginForm);

const styles = {
  errorContainerStyle: {
    backgroundColor: 'white',
  },
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center', //text align
    color: 'red',
  },
};
