// ********* Import a library to help create a Component.
// a component is something that produces some amount of text or content (JSX) that can be placed on the screen of our device.
//import word is part of ES6.
import React from 'react';
import { Text, AppRegistry } from 'react-native';


//**********Create a component
const App = () => {
    return (
        //this is a dialiect of javascript called JSX. only way to communicate with react native what we want to render.
        <Text>Some Text</Text>
    );
};

//**********Render it to the device
//this line says "hey react native, you're about to render an app called albums"
AppRegistry.registerComponent('albums', () => App)
