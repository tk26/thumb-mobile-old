import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Content, Text, List, ListItem, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ThumbHeader from './ThumbHeader';

export default class ProfileProgress extends Component {
    render() {
        return (
            <Container>
                <ThumbHeader title = { "Profile Progress" } />
                <Content>
                    <Image
                        style = { 
                            { 
                                width: Dimensions.get('window').width,
                                height: Dimensions.get('window').height/4
                            }   
                        }
                        source = { require('./assets/travel_man.jpg') }
                    />
                    <List>
                        <ListItem>
                            <Left>
                                <Text>
                                    Signup
                                </Text>
                            </Left>
                            <Right>
                                <Icon name="check-circle" />
                            </Right>
                        </ListItem>
                        
                        <ListItem>
                            <Left>
                                <Text>
                                    Add a profile picture
                                </Text>
                            </Left>
                            <Right>
                                <Icon name="picture-o" />
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>
                                    Add a payment method
                                </Text>
                            </Left>
                            <Right>
                                <Icon name="credit-card" />
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>
                                    Describe yourself
                                </Text>
                            </Left>
                            <Right>
                                <Icon name="pencil-square-o" />
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>
                                    Book your first trip
                                </Text>
                            </Left>
                            <Right>
                                <Icon name="car" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}