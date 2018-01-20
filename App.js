import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';
import Signup from './Signup';
import Login from './Login';
import SignupSuccess from './SignupSuccess';
import LoginSuccess from './LoginSuccess';
import ProfileProgress from './ProfileProgress';
import ForgotPassword from './ForgotPassword';
import AddProfilePicture from './AddProfilePicture';

const RootNavigator = StackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerTitle: 'Signup',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
  SignupSuccess: {
    screen: SignupSuccess,
    navigationOptions: {
      headerTitle: 'Account Created',
    },
  },
  LoginSuccess: {
    screen: LoginSuccess,
    navigationOptions: {
      headerTitle: 'User logged in',
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerTitle: 'Forgot Password',
    },
  },
  ProfileProgress: {
    screen: ProfileProgress,
    navigationOptions: {
      headerTitle: 'Profile Progress',
    },
  },
  AddProfilePicture: {
    screen: AddProfilePicture,
    navigationOptions: {
      headerTitle: 'Add a profile picture',
    },
  },
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isReady: false };
    }
    
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState( { isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return (
                <Expo.AppLoading />
            );
        }
        else {
            return (
                <RootNavigator />
            );
        }
    }
}
