import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

//parameter props will retrieve from AlbumList component's http/map
const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;
