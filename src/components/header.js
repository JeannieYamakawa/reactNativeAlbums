// ********* Import a library to help create a Component.
//import word is part of ES6.
import React from 'react';
import { Text } from 'react-native';


//**********Create a component
const Header = () => {
    return <Text>Albums!</Text>
};

//**********Make the component available to other parts of the app
export default Header;
