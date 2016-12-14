// tricking react into importing the whole react library so that Babel can still compile into javascript but also the component from the react library so we can extend it
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    render() {
        return (
            <View>
                <Text>Album List!!!!</Text>
            </View>
    );
}
}

export default AlbumList;
