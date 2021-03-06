// ********* Import a library to help create a Component.
// a component is something that produces some amount of text or content (JSX) that can be placed on the screen of our device.
//import word is part of ES6.
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
//****import header
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//**********Create a component
const App = () => {
    return (
        //this is a dialiect of javascript called JSX. only way to communicate with react native what we want to render.
        //self closing tag below
        //property of headerText could be called anything. it's a variable being passed to header as an argument
        <View>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};

//**********Render it to the device
//this line says "hey react native, you're about to render an app called albums"
AppRegistry.registerComponent('albums', () => App);
