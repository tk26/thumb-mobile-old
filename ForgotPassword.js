import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import ThumbHeader from './ThumbHeader';

export default class ForgotPassword extends Component {
    render() {
        return (
            <Container>
                <ThumbHeader title = { "Forgot Password" } />
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label> Email </Label>
                            <Input />
                        </Item>
                        <Button rounded success style = { { alignSelf: 'center' } }>
                            <Text>
                                Submit
                            </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}