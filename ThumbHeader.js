import React, { Component } from 'react';
import { Header, Left, Right, Body, Button, Icon, Title } from 'native-base';

export default class ThumbHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title style = { { alignSelf : 'center', width: 200 } }> 
                        {this.props.title || "Thumb"}
                    </Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        );
  }
}