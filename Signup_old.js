import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default class Signup_old extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '', lastName: '', email: '',
            school: '', password: '', confirmPassword: '',
            errors: []
        }
    }

    validate() {
        if(!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.school ) {
            this.state.errors.push('Fields incomplete');
        }
        
        if(this.state.password !== this.state.confirmPassword) {
            this.state.errors.push('Passwords do not match');
        }

        if(this.state.email.length > 5 && this.state.email.substr(this.state.email.length-4) !== '.edu') {
            this.state.errors.push('Requires a .edu email');
        }
    }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    saveUser() {
        if (this.state.errors.length === 0) {
            fetch('https://vast-everglades-88283.herokuapp.com/user/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "firstName" : this.state.firstName,
                    "lastName" : this.state.lastName,
                    "email" : this.state.email,
                    "school" : this.state.school,
                    "password" : this.state.password
                })
            })
            .then(this.handleErrors)
            .then( () => this.setState({ submitSucceeded : true }))
            .catch( () => this.setState({ submitSucceeded : false }) );
        }
        else {
            this.setState({ incomplete: true })
        }
    }

    render() {
        this.state.errors = [];
        this.validate();

        return (
            <View>
                <TextInput
                    placeholder = "First Name"
                    onChangeText = { (firstName) => this.setState({firstName}) }
                    value = { this.state.firstName }
                />
                <TextInput
                    placeholder = "Last Name"
                    onChangeText = { (lastName) => this.setState({lastName}) }
                    value = { this.state.lastName }
                />
                <TextInput
                    placeholder = "Email (.edu)"
                    onChangeText = { (email) => this.setState({email}) }
                    value = { this.state.email }
                />
                <TextInput
                    placeholder = "School"
                    onChangeText = { (school) => this.setState({school}) }
                    value = { this.state.school }
                />
                <TextInput
                    placeholder = "Password"
                    onChangeText = { (password) => this.setState({password}) }
                    value = { this.state.password }
                />
                <TextInput
                    placeholder = "Confirm Password"
                    onChangeText = { (confirmPassword) => this.setState({confirmPassword}) }
                    value = { this.state.confirmPassword }
                />
                <Button title = "Sign Up" onPress = { () => this.saveUser() }/>
                <Text>
                     { this.state.errors.map( (error) => error ).join(' ') }
                </Text>
                <Text>
                    { this.state.submitSucceeded ? "Saved User" : '' }
                </Text>
            </View>
        );
    }
}