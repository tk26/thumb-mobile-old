import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import ThumbHeader from './ThumbHeader';

export default class Login extends Component {
    render() {
        return (
            <Container>
                {/*<ThumbHeader title = { "Login" } />*/}
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label> Email </Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label> Password </Label>
                            <Input secureTextEntry = { true } />
                        </Item>
                        <Button rounded success style = { { alignSelf: 'center' } }>
                            <Text>
                                Login
                            </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}