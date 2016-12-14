// ********* Import a library to help create a Component.
//import word is part of ES6.
import React from 'react';
import { Text, View } from 'react-native';


//**********Create a component
const Header = (props) => {
    // above props variable/argument is to dynamically render the name within the header by using props from the parent App file.
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        //these flexbox props are applied to the parent container and will apply to all the children
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        //adding a shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//**********Make the component available to other parts of the app
export default Header;
