import React from 'react';
import { View, Text } from 'react-native';

//parameter props will retrieve from AlbumList component's http/map
const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    )
};

export default AlbumDetail;
