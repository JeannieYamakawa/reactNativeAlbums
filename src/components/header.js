// ********* Import a library to help create a Component.
//import word is part of ES6.
import React from 'react';
import { Text } from 'react-native';


//**********Create a component
const Header = () => {
    const { textStyle } = styles;
    return <Text style={textStyle}>Albums!</Text>
};

const styles = {
    textStyle: {
        fontSize: 20
    }
};

//**********Make the component available to other parts of the app
export default Header;
